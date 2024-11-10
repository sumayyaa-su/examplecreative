
import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { FaUser, FaPen, FaTrashAlt } from 'react-icons/fa';
import axiosInstance from '../../axiosinterceptors';

const UserList = () => {
  const [users, setUsers] = useState([]); // List of users
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [selectedUser, setSelectedUser] = useState(null); // To store the user to edit
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBio, setUserBio] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userImage, setUserImage] = useState(null); // To store the uploaded image
  const [errorMessage, setErrorMessage] = useState(null); // State to manage errors

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:5000/user');
        setUsers(response.data);
      } catch (error) {
        setErrorMessage('Error fetching users.');
      }
    };

    fetchUsers();
  }, []);

  // Handle Create or Edit user
  const handleSaveUser = async () => {
    const userData = { userName, userEmail, userBio, userPassword, userImage };

    // Input validation: Check if all required fields are filled
    if (!userName || !userEmail || !userBio || !userPassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      if (selectedUser) {
        // Update existing user
        await axiosInstance.put(`http://localhost:5000/users/${selectedUser._id}`, userData);
        alert('User updated successfully!');
      } else {
        // Create new user
        await axiosInstance.post('http://localhost:5000/user', userData);
        alert('User created successfully!');
      }

      // Refresh the user list after save
      fetchUsers(); // Refresh the user list after save
      setSelectedUser(null); // Reset selected user

      // Clear form fields
      setUserName('');
      setUserEmail('');
      setUserBio('');
      setUserPassword('');
      setUserImage(null); // Clear the image
      setShowForm(false); // Hide the form
    } catch (error) {
      setErrorMessage('An error occurred while saving the user. Please try again.');
    }
  };

  // Open form for creating new user
  const openCreateUserForm = () => {
    setSelectedUser(null); // Clear selected user for creating new
    setUserName('');
    setUserEmail('');
    setUserBio('');
    setUserPassword('');
    setUserImage(null); // Clear the image
    setShowForm(true); // Show the form
    setErrorMessage(null); // Clear any previous error messages
  };

  // Open form for editing an existing user
  const openEditUserForm = (user) => {
    setSelectedUser(user); // Set the user to edit
    setUserName(user.userName || '');
    setUserEmail(user.userEmail || '');
    setUserBio(user.userBio || '');
    setUserPassword(''); // Do not pre-fill password for security reasons
    setUserImage(user.userImage || null); // Load existing image if available
    setShowForm(true); // Show the form
    setErrorMessage(null); // Clear any previous error messages
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(URL.createObjectURL(file)); // Temporarily show the uploaded image
    }
  };

  // Handle delete user
  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`http://localhost:5000/users/${id}`);
        setUsers(users.filter(user => user._id !== id)); // Remove from list
        alert('User deleted successfully!');
      } catch (error) {
        setErrorMessage('An error occurred while deleting the user. Please try again.');
      }
    }
  };

  return (
    <div>
      {/* Error message */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {/* Create/Edit User Form Section */}
      {showForm && (
        <div className="mb-4" style={styles.formBoxContainer}>
          <h4>{selectedUser ? 'Edit User' : 'Create New User'}</h4>
          <Form>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user's name"
                value={userName || ''}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter user's email"
                value={userEmail || ''}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter user's bio"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={userPassword || ''}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userImage">
              <Form.Label>User Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageUpload}
              />
              {/* Display the selected image */}
              {userImage && (
                <img src={userImage} alt="User Preview" style={{ width: '100px', marginTop: '10px' }} />
              )}
            </Form.Group>

            <Button variant="primary" onClick={handleSaveUser}>
              Save User
            </Button>
          </Form>
        </div>
      )}

      {/* Users List */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUser /> Users</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={openCreateUserForm}>
                <FaUser /> Create User
              </Button>
            </Col>
          </Row>
          <Row>
            {users.map(user => (
              <Col key={user._id} md={4} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={user.userImage || 'https://via.placeholder.com/150'}
                    style={{ maxHeight: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{user.userName}</Card.Title>
                    <Card.Text>
                      <strong>Email:</strong> {user.userEmail}<br />
                      <strong>Bio:</strong> {user.userBio || 'No bio available.'}
                    </Card.Text>
                    <Button variant="info" onClick={() => openEditUserForm(user)}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteUser(user._id)}><FaTrashAlt /> Delete</Button>
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
  }
};

export default UserList;
