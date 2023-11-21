import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  // Define the initial form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    SRN: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with form data here, such as submitting to a server
    console.log('Form data submitted:', formData);
  };

  const shoot = () => {
    alert('Great Shot!');
  };

  return (
    <div className="App">
      <h1>React Form Example</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formSRN">
          <Form.Label>SRN:</Form.Label>
          <Form.Control
            type="text"
            name="SRN"
            value={formData.SRN}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={shoot}>
          submit
        </Button>
        {' '}
      </Form>
    </div>
  );
}

export default App;
