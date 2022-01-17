import React from "react";
import cardico1 from "../images/icon-brand-recognition.svg";
import cardico2 from "../images/icon-detailed-records.svg";
import cardico3 from "../images/icon-fully-customizable.svg";

export default function MainArea() {
  return (
    <section className="main-container">
      <div className="wrapper  ">
        <div className="input-container">
          <div className="input">
            <input placeholder="Shorten a link here..." />
          </div>
          <div className="shorten-btn-container">
            <button className="shortenLink">Shorten it!</button>
          </div>
        </div>
      </div>

      <div className="caption-container">
        <h2 className="mg-sm-bottom">Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced Statistics dashboard</p>
      </div>

      <section className="card-container">
        <span className="fat-line"></span>
        <div className="card card--1">
          <div className="icon">
            <img src={cardico1} />
          </div>
          <h4 className="mg-sm-bottom">Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence
            in your content.
          </p>
        </div>
        <div className="card card--2">
          <div className="icon">
            <img src={cardico2} />
          </div>
          <h4 className="mg-sm-bottom">Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform
            better decisions.
          </p>
        </div>
        <div className="card card--3">
          <div className="icon">
            <img src={cardico3} />
          </div>
          <h4 className="mg-sm-bottom">Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
    </section>
  );
}
