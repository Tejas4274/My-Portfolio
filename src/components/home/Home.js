import React, { useEffect, useState } from "react";
import Tejas from "../../assets/Tejas.jpg";
const Home = () => {
  useEffect(() => {
    const typedTextElement = document.querySelector(".text");
    const strings = [
      "Coder 👾",
      "Creative Full Stack Dev ",
      "Artistic Frontend Dev ",
      "Efficient Backend Dev ",
    ];

    let charIndex = 0;
    let arrayIndex = 0;
    let currentString = "";
    let isDeleting = false;
    let loop;

    const type = () => {
      if (!isDeleting && charIndex <= strings[arrayIndex].length) {
        currentString = strings[arrayIndex].substring(0, charIndex);
        typedTextElement.textContent = currentString;
        charIndex++;
      } else if (isDeleting && charIndex >= 0) {
        currentString = strings[arrayIndex].substring(0, charIndex);
        typedTextElement.textContent = currentString;
        charIndex--;
      }

      if (!isDeleting && charIndex === strings[arrayIndex].length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % strings.length;
      }

      applySpecialEffects(arrayIndex);

      loop = setTimeout(type, isDeleting ? 50 : 100);
    };

    const applySpecialEffects = (index) => {
      const gradients = [
        "linear-gradient(45deg, #ff6b6b, #f94c00)",
        "linear-gradient(45deg, #24c6dc, #514a9d)",
        "linear-gradient(45deg, #d4fc79, #96e6a1)",
        "linear-gradient(45deg, #ff758c, #ff7eb3)",
      ];
      typedTextElement.style.background = gradients[index % gradients.length];
      typedTextElement.style.webkitBackgroundClip = "text";
      typedTextElement.style.webkitTextFillColor = "transparent";

      typedTextElement.style.transition = "transform 0.3s ease-out";
      typedTextElement.style.transform = "scale(1.3)";
      setTimeout(() => {
        typedTextElement.style.transform = "scale(1)";
      }, 300);
    };

    type();

    return () => {
      clearTimeout(loop);
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Tejas Kamble</h1>
        <h3>
          And I'm a <span className="text"></span>
        </h3>
        <br />
        <p>
          I'm a Full Stack Developer. <br /> <br />
          My first exposure to professional life through internships has
          benefited me mostly in strengthening my personal skills. I have
          developed a positive attitude and a strong sense of responsibility,
          being innovative, resourceful, open, and responsive to change. It has
          created in me an interest in lifelong learning.
        </p>
        <div className="home-scl">
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
            href="https://docs.google.com/document/d/1ymr24QiIc-j3eE0Pl1CV14N-qJFhpxeI/edit?usp=drive_link&ouid=110978289447341519885&rtpof=true&sd=true"
            style={{ "--i": 11 }}
          >
            <i className="bx bxs-file-doc"></i>
          </a>
        </div>
        <a href="#" className="btn-box">
          More About Me
        </a>
      </div>

      <div className="myimage">
        <img src={Tejas} loading="lazy" />
      </div>
    </section>
  );
};

export default Home;
