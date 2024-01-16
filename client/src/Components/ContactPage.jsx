import { useState } from 'react';
import './ContactPage.css';
import NavBar from './NavBar';
const ContactPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Inquiry submitted:', inquiry);
    
  };

  return (
    <>
    <NavBar />
    <div className="contact-page">
      <h2 style={{fontSize: '25px', fontWeight: 'bold'}}>Contact Us</h2>

      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={inquiry.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={inquiry.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message:
              <textarea
                name="message"
                value={inquiry.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button type="submit">Submit Inquiry</button>
          </form>
        </div>

        <div className="contact-map">
          <h3>Our Location</h3>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31392.83138877351!2d-74.00661495001288!3d40.713791399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE4JzEwLjYiTiA3NMKwMDknMjkuNCJX!5e0!3m2!1sen!2sus!4v1638817542819!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
