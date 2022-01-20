import React from "react";
import illus from "../images/illustration-working.svg";

export default function SliderArea() {
  return (
    <section className="slider-section">
      <article className="article-left">
        <h1 className="main-caption mg-sm-bottom">More than just shorter links</h1>
        <p className="secondary-caption mg-sm-bottom">
          Build your brand's recognition and get detailed insights on how your links are performing
        </p>
        <span className="getStarted-btn mg-sm-top">
          <a href="#root">Get Started</a>
        </span>
      </article>
      <div className="illustration-container">
        <img src={illus} alt="Working illustration" />
      </div>
    </section>
  );
}
