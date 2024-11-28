import React from "react";
import "./Skills.css";
const TechnicalProgress = () => {
  return (
    <section className="skill-section">
      <div className="container1" id="skills">
        <h1 className="heading1">Technical Skills</h1>

        <div className="Technical-bars">
          <div className="bar">
            <i style={{ color: "#c95d2e" }} className="bx bxl-html5"></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#147bbc" }} className="bx bxl-css3"></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#b0bc1e" }} className="bx bxl-javascript"></i>
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progress-line javaScript">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#c32ec9" }} className="bx bxl-java"></i>
            <div className="info">
              <span>Java</span>
            </div>
            <div className="progress-line java">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "green" }} className="bx bxl-spring-boot"></i>
            <div className="info">
              <span>Spring Boot</span>
            </div>
            <div className="progress-line spring">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#B52E31" }} className="bx bxl-angular"></i>
            <div className="info">
              <span>Angular</span>
            </div>
            <div className="progress-line angular">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#61DBFB" }} className="bx bxl-react"></i>
            <div className="info">
              <span>React.js</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "white" }} className="bx bxs-data"></i>
            <div className="info">
              <span>SQL</span>
            </div>
            <div className="progress-line sql">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <h1 className="heading1">Soft Skills</h1>
        <div className="radial-bars">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">60%</div>
            <div className="text">Communication</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Problem Solving</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">80%</div>
            <div className="text">TeamWork</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProgress;
