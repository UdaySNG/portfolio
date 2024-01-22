import React, { useState, useEffect } from 'react';
import "../scss/components/introduction.scss";

const Intro = () => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [fadeIn, setFadeIn] = useState(false); // State to control image fade-in
  const textArray = ["Uday Singh", "Developing Art."];
  let textIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (textIndex < textArray.length) {
      if (charIndex <= textArray[textIndex].length) {
        if (textIndex === 0) {
          setTypedText1((prevText) => textArray[textIndex].slice(0, charIndex));
        } else {
          setTypedText2((prevText) => textArray[textIndex].slice(0, charIndex));
        }
        charIndex += 1;
      } else {
        // Move to the next text in the array
        textIndex += 1;
        charIndex = 0;
        if (textIndex === textArray.length) {
          // Start fading in the image after typing is complete
          setFadeIn(true);
        }
      }
    }
  };

  useEffect(() => {
    const typingInterval = setInterval(type, 45); // Adjust the interval as needed

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section className="introduction__section">
        <div className="introduction__text">
          <h2 className="introduction__section__title">
            {typedText1}
          </h2>
          <h2 className="introduction__section__title">
            {typedText2}
          </h2>
        </div>
        <figure className={`introduction__section__figure ${fadeIn ? 'fade-in' : ''}`}>
        <img src={process.env.PUBLIC_URL + '/images/uday-pfp.webp'} alt="" className="section__image" />

        </figure>
      </section>
    </>
  );
};

export default Intro;
