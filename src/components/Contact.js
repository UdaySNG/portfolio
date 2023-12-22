// React component
import React, { useState } from "react";
import "../scss/components/contact.scss";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(null);

  const cardData = [
    {
      icon: "fa-solid fa-envelope",
      link: "mailto:udayamar04@gmail.com",
      bgColor: "#4CB9E7",
      title: "Email",
    },
    {
      icon: "fa-solid fa-mobile",
      link: "tel:+31685245525",
      bgColor: "#BF3131",
      title: "Phone",
    },
    {
      icon: "fab fa-discord",
      link: "https://discordapp.com/users/330984758257516546",
      bgColor: "#7289DA",
      title: "Discord",
    },
    {
      icon: "fab fa-github",
      link: "https://github.com/Uday-Singh1",
      bgColor: "#24292e", // GitHub color
      title: "GitHub",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/udayamarsingh/",
      bgColor: "#0A66C2", // LinkedIn color
      title: "LinkedIn",
    },
  ];

  return (
    <section className="contact">
      <h3 className="contact__heading">Connect With Me.</h3>
      <div className="contact__wrapper">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`contact__card ${
              isHovered === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : ""}
              rel="noopener noreferrer"
            >
              <div className="contact__icon">
                <i className={card.icon}></i>
              </div>
              <div className="contact__info">
                <p>{card.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
