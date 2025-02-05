import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = () => {

  
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Me</span>
        </h2>
        <h4>Let's Work Together</h4>
        <p>
          <b style={{ color: "white" }}>
            Have an idea in mind? Let's turn it into reality together!
          </b>
        </p>
        <ul className="contact-list">
          <li>
            <i className="bx bx-envelope"></i> tejaskamble4274@gmail.com
          </li>
          <li>
            <i className="bx bx-phone"></i> 9356964702
          </li>
        </ul>
        <div className="contact-icons">
          <a
            href="https://github.com/Tejas4274/Tejas4274.git"
            style={{ "--i": 7 }}
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9356964702"
            style={{ "--i": 9 }}
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-kamble-81b9812a7"
            style={{ "--i": 10 }}
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://docs.google.com/document/d/1Lx4qF5-JZED7l1crMXuFla_6uYX5NxpW/edit?usp=drive_link&ouid=110978289447341519885&rtpof=true&sd=true"
            style={{ "--i": 11 }}
          >
            <i className="bx bxs-file-doc"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="40"
            rows="10"
            placeholder="Enter Your Idea"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default Footer;
