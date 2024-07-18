import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../scss/components/work.scss"; // Import SCSS styling
import workExperience from "../data/work.json"; // Import work experiences JSON

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow next-arrow`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow prev-arrow`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index
  const sliderRef = useRef(null); // Reference to the Slider component
  const experiences = workExperience; // Assuming workExperience is an array of objects

  useEffect(() => {
    // Simulate fetching data from JSON file
    // setExperiences(workExperience);
  }, []);

  const settings = {
    dots: false, // Do not show dots by default
    infinite: true, // Enable infinite looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom next arrow component
    prevArrow: <PrevArrow />, // Custom prev arrow component
    initialSlide: currentSlide, // Set initial slide based on currentSlide state
    beforeChange: (oldIndex, newIndex) => {
      console.log(`Before change: oldIndex=${oldIndex}, newIndex=${newIndex}`);
      // Handle any necessary before change logic
    },
    afterChange: (current) => {
      console.log(`After change: currentSlide=${current}`);
      setCurrentSlide(current); // Update current slide index
    },
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed for responsive design
        settings: {
          dots: false, // Enable dots navigation on smaller screens
          arrows: false, // Disable arrows on smaller screens
        },
      },
    ],
  };

  return (
    <section className="work">
      <h3 className="work__heading">Work experience.</h3>
      <img src="../public/images/animations/Animation" alt="" />
      <div className="work-container">
        <Slider ref={sliderRef} {...settings}>
          {experiences.map((exp, index) => (
            <div key={index} className="work-slide">
              <img src={exp.image} alt={exp.title} className="work-image" />
              <div className="work-details">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Work;
