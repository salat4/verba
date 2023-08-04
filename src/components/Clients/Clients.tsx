import React from "react";
import s from "./Clients.module.css";
import SliderComp from "../Slider/SliderComp";
import jsonClient from "../../JSON/jsonClient.json";
import Image from "next/image";

const Clients = () => {
  interface ClientData {
    image?: string;
    title?: string;
    text: string;
  }

  const Slide: React.FC<{ el: ClientData }> = ({ el }) => {
    return (
      <div>
        <div className={s.box}>
          {el.image && (
            <Image
              width={100}
              height={100}
              alt="photo"
              src={el.image}
              className={s.photo}
            />
          )}
          {el.title && <p className={s.title}>{el.title}</p>}
          <p className={s.text}>{el.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className={s.section}>
      {/* <h3 className={s.title}>Hear From Our Clients</h3> */}

      <SliderComp arr={jsonClient} number={1} Slide={Slide} />
    </section>
  );
};

export default Clients;
