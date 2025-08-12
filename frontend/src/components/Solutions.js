import React from "react";
import Slider from "react-slick";
import "../style/Solution.css";

const Solutions = () => {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        <h2 className="solutions-title fade-in delay-1">
          Giải pháp của QRanty
        </h2>
        <img src="/assets/solution1.png" alt="Nguoidungdaudau" />
      </div>

      {/* {solutionsData.map((item, index) => (
        <div className={`solution-block ${index % 2 === 1 ? 'reverse' : ''}`} key={item.id}>
          <div className={`solution-img ${item.imageClass} fade-in delay-1`} />
          <div className="solution-text-content">
            <h3 className="fade-in delay-2">{item.title}</h3>
            <p className="solution-description fade-in delay-3">{item.description}</p>
            <ul className="solution-tick-list fade-in delay-4">
              {item.list.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="fade-in delay-4">
              <Slider {...settings}>
                {item.slides.map((src, i) => (
                  <div key={i}>
                    <img src={src} alt={`slide ${i}`} className="solution-slider-img" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default Solutions;
