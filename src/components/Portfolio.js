import React from 'react';
import "../styles/Portfolio.css";
import work1 from '../images/work-1.png';
import work2 from '../images/work-2.png'
import work3 from '../images/work-3.png'

function Portfolio () {
    return (
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={work1} />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work2} />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a className='btn' href=''>See more..</a>
        </div>
      </div>
    );
}

export default Portfolio;