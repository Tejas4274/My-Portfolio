import React from "react";

const Footer = () => {
  const sendEmail = () => {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "tk9356964702@gmail.com",
      Password: "password",
      To: "tejaskamble4274@gmail.com",
      From: document.getElementById("email").value,
      Subject: document.getElementById("sub").value,
      Body:
        "Name:  " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Subject: " +
        document.getElementById("sub").value +
        "<br> Message: " +
        document.getElementById("message").value,
    })
      .then((message) => alert("Message Sent Successfully"))
      .catch((error) => alert("Failed to send the message: " + error));
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
            href="https://drive.google.com/file/d/17gi5fKiz-rhlr1TlvJtlmwQK8a2NElzj/view?usp=drive_link"
            style={{ "--i": 11 }}
          >
            <i className="bx bxs-file-doc"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            id="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            id="email"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            id="sub"
          />
          <textarea
            name="message"
            cols="40"
            rows="10"
            placeholder="Enter Your Idea"
            required
            id="message"
          ></textarea>

          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default Footer;
