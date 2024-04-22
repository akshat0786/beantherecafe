import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact-form-container" id="contact-form">
      {/* Embeded Google Map Location */}
      <div className="google-maps">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113923.07194853414!2d75.7377898!3d26.8368988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc938701f15f3%3A0x351bf56d3d5b0b8f!2sBean%20There%3F%3F!5e0!3m2!1sen!2sin!4v1713722947343!5m2!1sen!2sin"
          width="500"
          height="650"
          className="googleMap"
          //   style="border:0;"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contactForm">
        <div>
          <h1>Contact Us</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="shop-address">
          <h2>Shop Address</h2>
          <p>
            Sector 1 7, Pratap Nagar Opp Mewar Apartments, near Rawat Public
            School
          </p>
          <p>Jaipur, Rajasthan</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
