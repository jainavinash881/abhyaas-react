/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) newErrors.message = "Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMsg("");

    if (!validate()) return;

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // replace
        "YOUR_TEMPLATE_ID",  // replace
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "avinash@gmail.com" //replace with to_email
        },
        "YOUR_PUBLIC_KEY"    // replace
      )
      .then(() => {
        setStatusMsg("✅ Your message has been sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        setStatusMsg("❌ Failed to send message. Try again!");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "error-input" : ""}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}

          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Phone Number *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <label>Description *</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {statusMsg && <p className="status-msg">{statusMsg}</p>}
        </form>

        {/* MAP */}
        <div className="contact-map">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5789892581515!2d72.5158082793457!3d23.07589170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d50ec9449ad%3A0x544bbcfd00292a65!2sABHYAAS%20YOGA%20STUDIO!5e0!3m2!1sen!2sin!4v1756131154091!5m2!1sen!2sin"
          width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        
        </iframe>
        </div>


      </div>

    </div>
  );
}
