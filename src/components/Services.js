import React from 'react';
import "../styles/Services.css";

function Services () {
return (
  <div id="services">
    <div className="container">
      <h1 className="sub-title">My Services</h1>
      <div className="services-list">
        <div>
        <i className="fa-solid fa-code"></i>
          <h2>Web App Deveopment</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="">Learn more..</a>
        </div>
        <div>
        <i class="fa-solid fa-crop-simple"></i>
          <h2>Application Deployment</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="">Learn more..</a>
        </div>
        <div>
        <i class="fa-brands fa-app-store"></i>
          <h2>Mobile Apllication Development</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="">Learn more..</a>
        </div>
      </div>
    </div>
  </div>
);
}

export default Services;