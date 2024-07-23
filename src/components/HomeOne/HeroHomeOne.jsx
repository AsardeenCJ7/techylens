import React from "react";
import heroThumbOne from "../../assets/images/hero-thumb-2.png";
import heroThumbTwo from "../../assets/images/hero-thumb-2.png";
import shapeTwo from "../../assets/images/shape/shape-2.png";
import shapeThree from "../../assets/images/shape/shape-3.png";
import shapeFour from "../../assets/images/shape/shape-4.png";

function HeroHomeOne({ className }) {
  return (
    <>
      <section className={`appie-hero-area ${className || ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 home-first-content">
              <div className="appie-hero-content">
                <span>Welcome To TechyLens</span>
                <h1 className="appie-title">
                  Your Gateway to Professional Success
                </h1>
                <p>
                  At TechyLens, we believe in shaping the future by providing
                  top-notch professional courses and comprehensive solutions
                  that cater to the needs of today’s competitive world. Whether
                  you're looking to advance your career, start a freelancing
                  journey, or dive into the world of software development and
                  digital marketing, we have something for everyone. Explore our
                  wide range of services designed to empower innovation and
                  growth under one umbrella.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-user-plus" /> Join with US
                    </a>
                  </li>
                  <li>
                    <a className="item-2" href="#">
                      <i className="fas fa-envelope" /> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 image-front">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <img src={heroThumbTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeFour} alt="" />
        </div> */}

        <div className="hero-shape-1 shape-box"></div>
        <div className="hero-shape-2 shape-box"></div>
        <div className="hero-shape-3 shape-box"></div>
        <div className="hero-shape-4 shape-box"></div>
        <div className="hero-shape-4 shape-box"></div>
      </section>
    </>
  );
}

export default HeroHomeOne;
