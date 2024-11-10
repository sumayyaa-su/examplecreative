import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Modal, Card, Row, Col, Image } from 'react-bootstrap';
import { FaUser, FaUserMd, FaTrashAlt, FaPen } from 'react-icons/fa'; // Adding icons
import axiosInstance from '../../axiosinterceptors'; // Assuming you're using axios interceptors

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);

  // User and Doctor state to handle input changes
  const [newUser, setNewUser] = useState({ userImage: '', userName: '', userEmail: '', userBio: '' });
  const [newDoctor, setNewDoctor] = useState({ doctorImage: '', doctorName: '', doctorEmail: '', doctorBio: '', specialty: '', yearsOfExperience: '' });

  useEffect(() => {
    fetchUsers();
    fetchDoctors();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:5000/user');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch all doctors
  const fetchDoctors = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:5000/doctor');
      setDoctors(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle image upload and store image URL
  const handleImageUpload = async (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_upload_preset'); // Replace with your cloud preset

      try {
        const res = await axiosInstance.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
        const imageUrl = res.data.secure_url;
        if (type === 'user') {
          setNewUser({ ...newUser, userImage: imageUrl });
        } else {
          setNewDoctor({ ...newDoctor, doctorImage: imageUrl });
        }
      } catch (err) {
        console.error('Image upload failed:', err);
      }
    }
  };

  // Create or Update User
  const handleUserSubmit = async () => {
    if (selectedUser) {
      // Update user
      await axiosInstance.put(`http://localhost:5000/user/${selectedUser._id}`, newUser);
    } else {
      // Create new user
      await axiosInstance.post('http://localhost:5000/user', newUser);
    }
    setShowUserModal(false);
    fetchUsers();
  };

  // Create or Update Doctor
  const handleDoctorSubmit = async () => {
    if (selectedDoctor) {
      // Update doctor
      await axiosInstance.put(`http://localhost:5000/doctor/${selectedDoctor._id}`, newDoctor);
    } else {
      // Create new doctor
      await axiosInstance.post('http://localhost:5000/doctor', newDoctor);
    }
    setShowDoctorModal(false);
    fetchDoctors();
  };

  // Delete User
  const handleDeleteUser = async (userId) => {
    await axiosInstance.delete(`http://localhost:5000/user/${userId}`);
    fetchUsers();
  };

  // Delete Doctor
  const handleDeleteDoctor = async (doctorId) => {
    await axiosInstance.delete(`http://localhost:5000/doctor/${doctorId}`);
    fetchDoctors();
  };

  // Fill the form fields when editing an existing user
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewUser({
      userImage: user.userImage || '',
      userName: user.userName || '',
      userEmail: user.userEmail || '',
      userBio: user.userBio || '',
    });
    setShowUserModal(true);
  };

  // Fill the form fields when editing an existing doctor
  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setNewDoctor({
      doctorImage: doctor.doctorImage || '',
      doctorName: doctor.doctorName || '',
      doctorEmail: doctor.doctorEmail || '',
      doctorBio: doctor.doctorBio || '',
      specialty: doctor.specialty || '',
      yearsOfExperience: doctor.yearsOfExperience || '',
    });
    setShowDoctorModal(true);
  };

  return (
    <div>
      <h2 className="text-center mb-5" style={{ color: '#3b3b3b' }}>Admin Dashboard</h2>

      {/* Users Section */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUser /> Users</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={() => setShowUserModal(true)}><FaUser /> Create User</Button>
            </Col>
          </Row>

          {/* Display user cards */}
          <Row>
            {users.map(user => (
              <Col key={user.userId} sm={12} md={6} lg={4}>
                <Card className="mb-3">
                  <Card.Body>
                    {user.userImage && <Image src={user.userImage} roundedCircle width="50" />}
                    <Card.Title>{user.userName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.userEmail}</Card.Subtitle>
                    <Card.Text>{user.userBio}</Card.Text>
                    <Button variant="info" onClick={() => handleEditUser(user)}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteUser(user.userId)}><FaTrashAlt /> Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Doctors Section */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUserMd /> Doctors</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={() => setShowDoctorModal(true)}><FaUserMd /> Create Doctor</Button>
            </Col>
          </Row>

          {/* Display doctor cards */}
          <Row>
            {doctors.map(doctor => (
              <Col key={doctor.doctorId} sm={12} md={6} lg={4}>
                <Card className="mb-3">
                  <Card.Body>
                    {doctor.doctorImage && <Image src={doctor.doctorImage} roundedCircle width="50" />}
                    <Card.Title>{doctor.doctorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{doctor.doctorEmail}</Card.Subtitle>
                    <Card.Text>
                    <Card.Text>{doctor.doctorBio}</Card.Text>
                      <strong>Specialty: </strong>{doctor.specialty}<br />
                      <strong>Experience: </strong>{doctor.yearsOfExperience} years
                    </Card.Text>
                    <Button variant="info" onClick={() => handleEditDoctor(doctor)}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteDoctor(doctor.doctorId)}><FaTrashAlt /> Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* User Modal */}
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? 'Edit User' : 'Create User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newUser.userName}
                onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.userEmail}
                onChange={(e) => setNewUser({ ...newUser, userEmail: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="userBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bio"
                value={newUser.userBio}
                onChange={(e) => setNewUser({ ...newUser, userBio: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="userImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleImageUpload(e, 'user')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUserModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleUserSubmit}>
            {selectedUser ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Doctor Modal */}
      <Modal show={showDoctorModal} onHide={() => setShowDoctorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDoctor ? 'Edit Doctor' : 'Create Doctor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="doctorName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newDoctor.doctorName}
                onChange={(e) => setNewDoctor({ ...newDoctor, doctorName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="doctorEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newDoctor.doctorEmail}
                onChange={(e) => setNewDoctor({ ...newDoctor, doctorEmail: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="specialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialty"
                value={newDoctor.specialty}
                onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="yearsOfExperience">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter years of experience"
                value={newDoctor.yearsOfExperience}
                onChange={(e) => setNewDoctor({ ...newDoctor, yearsOfExperience: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="doctorImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleImageUpload(e, 'doctor')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDoctorModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleDoctorSubmit}>
            {selectedDoctor ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
