import React from "react";
import IconOne from "../../assets/images/icon/1.png";
import IconTwo from "../../assets/images/icon/2.png";
import IconThree from "../../assets/images/icon/3.png";
import IconFour from "../../assets/images/icon/4.png";

function ServicesHomeOne({ className }) {
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">
                <span className="title-offer"> What we are offer? </span>
                <br /> Innovative Solutions
              </h3>
              <p>
                The full monty spiffing good time no biggie cack grub fantastic.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="appie-title">Software Solutions</h4>
              <p>Cutting-Edge Software Solutions.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="appie-title">Professional Courses</h4>
              <p>Empowering Professional Courses.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="appie-title">Startup Solutions</h4>
              <p>Comprehensive Startup Solutions.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={IconFour} alt="" />
                <span>4</span>
              </div>
              <h4 className="appie-title">Travel and Tourism</h4>
              <p>Dynamic Travel and Tourism Services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
