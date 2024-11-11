import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { FaUserMd, FaPen, FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../../axiosinterceptors';
import axios from 'axios';

const DoctorProfile = () => {
  const [doctors, setDoctors] = useState([]); // List of doctors
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [selectedDoctor, setSelectedDoctor] = useState(null); // To store the doctor to edit
  const [doctorName, setDoctorName] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [password, setPassword] = useState('');
  const [doctorImage, setDoctorImage] = useState(null); // To store the uploaded image
  const [doctorBio, setDoctorBio] = useState(''); // State for the doctor's biography

  // Fetch doctor data on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:5000/doctor');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  // Handle Create or Edit doctor
  const handleSaveDoctor = async () => {
    const doctorData = { doctorName, doctorEmail, specialty, yearsOfExperience, password, doctorImage, doctorBio };

    // Input validation: Check if all required fields are filled
    if (!doctorName || !doctorEmail || !specialty || !yearsOfExperience || !password || !doctorImage|| !doctorBio) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      if (selectedDoctor) {
        // Update existing doctor
        await axiosInstance.put(`http://localhost:5000/doctor/doctors/${selectedDoctor._id}`, doctorData);
        alert('Doctor updated successfully!');
      } else {
        // Create new doctor
        await axiosInstance.post('http://localhost:5000/doctors', doctorData);
        alert('Doctor created successfully!');
      }

      // Refresh the doctor list after save
      fetchDoctors(); // Refresh the doctor list after save
      setSelectedDoctor(null); // Reset selected doctor

      // Clear form fields
      setDoctorName('');
      setDoctorEmail('');
      setSpecialty('');
      setYearsOfExperience('');
      setPassword('');
      setDoctorImage(null); // Clear the image
      setDoctorBio(''); // Clear the bio
      setShowForm(false); // Hide the form
    } catch (error) {
      console.error('Error saving doctor:', error);
      alert('An error occurred while saving the doctor. Please try again.');
    }
  };

  // Open form for creating new doctor
  const openCreateDoctorForm = () => {
    setSelectedDoctor(null); // Clear selected doctor for creating new
    setDoctorName('');
    setDoctorEmail('');
    setSpecialty('');
    setYearsOfExperience('');
    setPassword('');
    setDoctorImage(null); // Clear the image
    setDoctorBio(''); // Clear the bio
    setShowForm(true); // Show the form
  };

  // Open form for editing an existing doctor
  const openEditDoctorForm = (doctor) => {
    setSelectedDoctor(doctor); // Set the doctor to edit
    setDoctorName(doctor.doctorName || '');
    setDoctorEmail(doctor.doctorEmail || '');
    setSpecialty(doctor.specialty || '');
    setYearsOfExperience(doctor.yearsOfExperience || '');
    setPassword(''); // Do not pre-fill password for security reasons
    setDoctorImage(doctor.doctorImage || null); // Load existing image if available
    setDoctorBio(doctor.doctorBio || ''); // Load existing bio if available
    setShowForm(true); // Show the form
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctorImage(URL.createObjectURL(file)); // Temporarily show the uploaded image
    }
  };

  // Handle delete doctor
  const handleDeleteDoctor = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`http://localhost:5000/doctor/doctors/${id}`);
        setDoctors(doctors.filter(doctor => doctor._id !== id)); // Remove from list
        alert('Doctor deleted successfully!');
      } catch (error) {
        console.error('Error deleting doctor:', error);
        alert('An error occurred while deleting the doctor. Please try again.');
      }
    }
  };
  // const handleSaveDoctor = async () => {
  //   // Input validation: Check if all required fields are filled
  //   if (!doctorName || !doctorEmail || !specialty || !yearsOfExperience || !password || !doctorBio) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }
  
  //   // Create FormData to send as multipart/form-data
  //   const formData = new FormData();
  //   formData.append('doctorName', doctorName);
  //   formData.append('doctorEmail', doctorEmail);
  //   formData.append('specialty', specialty);
  //   formData.append('yearsOfExperience', yearsOfExperience);
  //   formData.append('password', password);
  //   formData.append('doctorBio', doctorBio);
  
  //   // If there is a doctor image, append it to the FormData
  //   if (doctorImage) {
  //     formData.append('doctorImage', doctorImage);
  //   }
  
  //   try {
  //     if (selectedDoctor) {
  //       // Update existing doctor
  //       await axiosInstance.put(`http://localhost:5000/doctor/doctors/${selectedDoctor._id}`, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data', // Important to specify for image uploads
  //         },
  //       });
  //       alert('Doctor updated successfully!');
  //     } else {
  //       // Create new doctor
  //       await axiosInstance.post('http://localhost:5000/doctor/doctors', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data', // Important to specify for image uploads
  //         },
  //       });
  //       alert('Doctor created successfully!');
  //     }
  
  //     // Refresh the doctor list after save
  //     fetchDoctors(); // Refresh the doctor list after save
  //     setSelectedDoctor(null); // Reset selected doctor
  
  //     // Clear form fields
  //     setDoctorName('');
  //     setDoctorEmail('');
  //     setSpecialty('');
  //     setYearsOfExperience('');
  //     setPassword('');
  //     setDoctorImage(null); // Clear the image
  //     setDoctorBio(''); // Clear the bio
  //     setShowForm(false); // Hide the form
  //   } catch (error) {
  //     console.error('Error saving doctor:', error);
  //     alert('An error occurred while saving the doctor. Please try again.');
  //   }
  // };
  

  return (
    
      <div style={styles.app}>
      {/* Header Section */}
      
      {/* Create/Edit Doctor Form Section */}
      {showForm && (
        <div className="mb-4" style={styles.formBoxContainer}>
          <h4>{selectedDoctor ? 'Edit Doctor' : 'Create New Doctor'}</h4>
          <Form>
            <Form.Group className="mb-3" controlId="doctorName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor's name"
                value={doctorName || ''}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="doctorEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter doctor's email"
                value={doctorEmail || ''}
                onChange={(e) => setDoctorEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="specialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialty"
                value={specialty || ''}
                onChange={(e) => setSpecialty(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="yearsOfExperience">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter years of experience"
                value={yearsOfExperience || ''}
                onChange={(e) => setYearsOfExperience(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password || ''}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Doctor Bio */}
            <Form.Group className="mb-3" controlId="doctorBio">
              <Form.Label>Doctor Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter doctor's bio"
                value={doctorBio}
                onChange={(e) => setDoctorBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="doctorImage">
              <Form.Label>Doctor Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageUpload}
              />
              {/* Display the selected image */}
              {doctorImage && (
                <img src={doctorImage} alt="Doctor Preview" style={{ width: '100px', marginTop: '10px' }} />
              )}
            </Form.Group>

            <Button variant="primary" onClick={handleSaveDoctor}>
              Save Doctor
            </Button>
          </Form>
        </div>
      )}

      {/* Doctors List */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUserMd /> Doctors</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={openCreateDoctorForm}>
                <FaUserMd /> Create Doctor
              </Button>
            </Col>
          </Row>
          <Row>
            {doctors.map(doctor => (
              <Col key={doctor._id} md={4} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={doctor.doctorImage || 'https://via.placeholder.com/150'}
                    style={{ maxHeight: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{doctor.doctorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{doctor.specialty}</Card.Subtitle>
                    <Card.Text>
                      <strong>Email:</strong> {doctor.doctorEmail}<br />
                      <strong>Experience:</strong> {doctor.yearsOfExperience} years<br />
                      <strong>Bio:</strong> {doctor.doctorBio || 'No bio available.'}
                    </Card.Text>
                    <Button variant="info" onClick={() => openEditDoctorForm(doctor)}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteDoctor(doctor._id)}><FaTrashAlt /> Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  formBoxContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    background: '#C2185B',
    color: '#F5B7B1 ',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
};

export default DoctorProfile;
