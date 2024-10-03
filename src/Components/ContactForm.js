import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    createdAt: '',
    first_name: '',
    last_name: '',
    emailId: '',
    age: '',
    gender: '',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: true, // Checkbox for status
  });

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContact({ ...contact, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = contact.id
      ? `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${contact.id}`
      : 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

    const method = contact.id ? 'PUT' : 'POST';

    try {
      await axios({
        method: method,
        url: apiUrl,
        data: {
          ...contact,
          createdAt: new Date().toISOString().split('T')[0], // Set the createdAt field
        },
      });
      alert('Contact saved successfully');
      setContact({
        createdAt: '',
        first_name: '',
        last_name: '',
        emailId: '',
        age: '',
        gender: '',
        mobilenumber: '',
        pan_no: '',
        adhaar_no: '',
        status: true,
      });
      fetchContacts(); // Refresh the contact list
    } catch (error) {
      console.error('Error saving contact', error);
    }
  };

  const handleEdit = (contactToEdit) => {
    setContact(contactToEdit);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`);
      alert('Contact deleted successfully');
      setContact({
        createdAt: '',
        first_name: '',
        last_name: '',
        emailId: '',
        age: '',
        gender: '',
        mobilenumber: '',
        pan_no: '',
        adhaar_no: '',
        status: true,
      });
      fetchContacts(); // Refresh the contact list
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{contact.id ? 'Edit Contact' : 'New Contact'}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={contact.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={contact.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="emailId"
            value={contact.emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={contact.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={contact.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            name="mobilenumber"
            value={contact.mobilenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">PAN Number</label>
          <input
            type="text"
            className="form-control"
            name="pan_no"
            value={contact.pan_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            name="adhaar_no"
            value={contact.adhaar_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={contact.status}
              onChange={handleChange}
            />
            <label className="form-check-label">Active Status</label>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            {contact.id ? 'Update Contact' : 'Add Contact'}
          </button>
        </div>
      </form>
      <div className="container m-5">
      <h2 className="text-center mt-5">Contact List</h2>
      <div className="contact-list-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
    <ul className="list-group mt-4">
      {contacts.map((c) => (
        <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            {c.first_name} {c.last_name} - {c.emailId}
          </div>
          <div>
            <button onClick={() => handleEdit(c)} className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={() => handleDelete(c.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
    </div>
  );
};

export default ContactForm;
