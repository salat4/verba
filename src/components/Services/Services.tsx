import React, { useState } from "react";
import Image from "next/image";
import microWhite from "public/images/MicroWhite.png";
import microBlack from "public/images/MicroBlack.png";
import musicWhite from "public/images/musicWhite.png";
import musicBlack from "public/images/MusicBlack.png";
import mixWhite from "public/images/MixWhite.png";
import mixBlack from "public/images/MixBlack.png";
import pulseWhite from "public/images/pulseWhite.png";
import pulseBlack from "public/images/pulseBlack.png";
import s from "./Services.module.css";

interface HandleItem {
  music?: boolean;
  mix?: boolean;
  pulse?: boolean;
  micro?: boolean;
  text: string[];
}

const Services: React.FC = () => {
  const [handle, setHandle] = useState<HandleItem[]>([
    { music: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { mix: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { pulse: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
    { micro: false, text: ["zxczxc", "zxczxczasd", "asdwqeqds"] },
  ]);

  const handleHoverEnter = (id: keyof HandleItem, index: number) => {
    setHandle((prevHandle) => {
      const updatedHandle = [...prevHandle];
      updatedHandle[index] = { ...updatedHandle[index], [id]: true };
      return updatedHandle;
    });
  };

  const handleHoverLeave = (id: keyof HandleItem, index: number) => {
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
              item[Object.keys(item)[0] as keyof HandleItem]
                ? s.services__item__show
                : s.services__item__hide
            }`}
            id={Object.keys(item)[0]}
            onMouseEnter={() =>
              handleHoverEnter(Object.keys(item)[0] as keyof HandleItem, index)
            }
            onMouseLeave={() =>
              handleHoverLeave(Object.keys(item)[0] as keyof HandleItem, index)
            }
            key={Object.keys(item)[0]}
          >
            <Image
              alt="services"
              width={190}
              height={160}
              src={
                item[Object.keys(item)[0] as keyof HandleItem]
                  ? Object.keys(item)[0] === "music"
                    ? musicBlack
                    : Object.keys(item)[0] === "mix"
                    ? mixBlack
                    : Object.keys(item)[0] === "pulse"
                    ? microBlack
                    : pulseBlack
                  : Object.keys(item)[0] === "music"
                  ? musicWhite
                  : Object.keys(item)[0] === "mix"
                  ? mixWhite
                  : Object.keys(item)[0] === "pulse"
                  ? microWhite
                  : pulseWhite
              }
              id={Object.keys(item)[0]}
            />
            {item[Object.keys(item)[0] as keyof HandleItem] && (
              <ul className={s.services__description}>
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
