import { useState } from 'react';
import axios from 'axios';
import './PassengerDetailsForm.css'; 

// { flightDetails, onBookingComplete }
const PassengerDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:9000/api/bookings', formData);
      console.log(response.status);
      
      if (response.status === 200) {
        alert('Congratulations! Ticket is booked.');
        // Redirect to recent bookings page
        window.location.href = 'http://localhost:3000/recent';
      } else {
        alert('Error: Ticket not booked.');
      }
    } catch (error) {
      console.error('Error booking the flight:', error.message);
    }
  };
  
  

  return (
    <>
    <br></br>
    <div className="passenger-details-form">
      <h2 style={{fontFamily:'cursive', fontWeight: 'bolder', fontSize: '33px', paddingBottom: '18px'}}>Passenger Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="twocolumns">
        <div className="form-group1">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{borderRadius: '10px', }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
        </div>

        <div className="form-group2">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.city}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              style={{borderRadius: '10px'}}
            />
          </label>
        </div>
        </div>
       

        <div className="form-group">
          <button type="submit" >Confirm !</button>
        </div>
      </form>
    </div>
    <br></br>
    </>
  );
};

export default PassengerDetailsForm;
