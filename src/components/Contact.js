import React from 'react';
import "../styles/Contact.css";

function Contact () {
return (
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <i class="fa-solid fa-at"></i> shankar149reddy@gmail.com
          </p>
          <p>
            <i class="fa-solid fa-phone"></i> +91 7893850508
          </p>
          <div className="social-icons">
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-at"></i>
            </a>
          </div>
          <a href='' className='btn btn2'>Download CV</a>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Your Message"
            ></textarea>
            <button className='btn btn2' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    {/* <div className='copyright'>
        <p>copyright</p>
    </div> */}
  </div>
);
}

export default Contact;