import Image from "next/image";
import React, { useEffect, useState } from "react";
import microWhite from "../../images/MicroWhite.png";
import microBlack from "../../images/microBlack.png";
import musicWhite from "../../images/MusicWhite.png";
import musicBlack from "../../images/musicBlack.png";
import mixWhite from "../../images/MixWhite.png";
import mixBlack from "../../images/mixBlack.png";
import pulseWhite from "../../images/PulseWhite.png";
import pulseBlack from "../../images/pulseBlack.png";
import s from "./Services.module.css";

const Services = () => {
  const [handle, setHandle] = useState([
    { music: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { mix: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { pulse: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { micro: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
  ]);

  const handleHoverEnter = (id, index) => {
    setHandle((prevHandle) => {
      const updatedHandle = [...prevHandle];
      updatedHandle[index] = { ...updatedHandle[index], [id]: true };
      return updatedHandle;
    });
  };

  const handleHoverLeave = (id, index) => {
    setHandle((prevHandle) => {
      const updatedHandle = [...prevHandle];
      updatedHandle[index] = { ...updatedHandle[index], [id]: false };
      return updatedHandle;
    });
  };
  return (
    <section className={s.services}>
      <h2 className={s.services__title}>SERVICES</h2>
      <ul className={s.services__list}>
        {handle.map((item, index) => (
          <li
            className={`${s.services__item} ${
              item[Object.keys(item)[0]]
                ? s.services__item__show
                : s.services__item__hide
            }`}
            id={Object.keys(item)[0]}
            onMouseEnter={() => handleHoverEnter(Object.keys(item)[0], index)}
            onMouseLeave={() => handleHoverLeave(Object.keys(item)[0], index)}
            key={Object.keys(item)[0]}
          >
            <Image
              alt="services"
              layout="responsive"
              src={
                Object.keys(item)[0] === "music"
                  ? item[Object.keys(item)[0]]
                    ? musicBlack
                    : musicWhite
                  : Object.keys(item)[0] === "mix"
                  ? item[Object.keys(item)[0]]
                    ? mixBlack
                    : mixWhite
                  : Object.keys(item)[0] === "pulse"
                  ? item[Object.keys(item)[0]]
                    ? microBlack
                    : microWhite
                  : item[Object.keys(item)[0]]
                  ? pulseBlack
                  : pulseWhite
              }
              id={Object.keys(item)[0]}
            />

            {item[Object.keys(item)[0]] && (
              <ul className={`${s.services__description}`}>
                {item.text.map((text, index) => (
                  <li className={s.services__description__item} key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
