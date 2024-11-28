import React from "react";
import Tejas from '../../assets/Tejas.jpg'
const About = () => {
  return (
    <>
    <section className="about" id="about">
      <div className="about-img">
        <img src={Tejas} alt="" loading="lazy" />
      </div>

      <div className="about-text">
        <h2>
          About<span> Me</span>
        </h2>
        <h4 className="button">I'm Full Stack Developer!</h4>
        <p>
          I'm Tejas Kamble & I'm from Pune. I'm an graduate from DY Patil ACS
          College specialized in Computer Science. I've worked hard in my
          education & maintained a CGPA of 8. Along with my degree I've
          completed Full Stack Developer Course.Now I'm ready to apply my
          knowledge into practice.Though I do not have any real life working
          experience, I've had a lot of exposure to the software field. My
          Goal is to build a successfull career as a Full Stack
          Developer.Moving forward in my career I hope to expand my experience
          across different industries. I'm a good learner and team player
          That's all about my self.
        </p>
        <a href="#" className="btn-box">
          More About Me
        </a>
      </div>
    </section>

    <section className="my-education">
      <h1>
        My <span>Education..</span>
      </h1>
      <span />
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">B.Sc in Computer Science</span>
            <p className="card-content">
              Dr. D Y Patil Arts Commerce And Science College Pimpri Pune
            </p>
            <span className="see-more">CGPA 8.23 </span>
          </div>
          <div className="date-box">
            <span className="month">Passout</span>
            <span className="date">2023</span>
          </div>
        </div>
      </div>



      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">12th HSC <br/> Science</span>
            <p className="card-content">
              Shri Mhalsakant Vidyalaya & Junior College Akurdi Pune
            </p>
            <span className="see-more">Percentage 58 </span>
          </div>
          <div className="date-box">
            <span className="month">Passout</span>
            <span className="date">2020</span>
          </div>
        </div>
      </div>



      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">10th SSC</span>
            <p className="card-content">
            Shri Mhalsakant Vidyalaya & Junior College Akurdi Pune
            </p>
            <span className="see-more">Percentage 82 </span>
          </div>
          <div className="date-box">
            <span className="month">Passout</span>
            <span className="date">2018</span>
          </div>
        </div>
      </div>



      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">Full Stack Developer Java</span>
            <p className="card-content">
              Seed Infotech Private Limited
            </p>
            <span className="see-more">Grade A+ </span>
          </div>
          <div className="date-box">
            <span className="month">Passout</span>
            <span className="date">2024</span>
          </div>
        </div>
      </div>
    
    </section>
  </>
  );
};

export default About;
