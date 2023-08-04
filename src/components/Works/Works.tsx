import React from "react";
import SliderComp from "../Slider/SliderComp";
import jsonAdv from "../../JSON/jsonAdv.json";
import jsonArt from "../../JSON/jsonArt.json";
import jsonGame from "../../JSON/jsonGame.json";
import s from "./Works.module.css";

interface MyArrayElement {
  video?: string;
  text: string;
}

const Slide: React.FC<{ el: MyArrayElement }> = ({ el }) => {
  return (
    <div className={s.slider}>
      <video playsInline width={320} height={150}>
        <source src={el.video} type="video/mp4" />
      </video>
      <p className={s.text}>{el.text}</p>
    </div>
  );
};

const WorkOfAdv: React.FC = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>WORKS FOR ADVERTS</h3>
      <SliderComp arr={jsonAdv} number={1} Slide={Slide} />
      <h3 className={s.title}>WORKS FOR GAMES</h3>
      <SliderComp arr={jsonArt} number={1} Slide={Slide} />
      <h3 className={s.title}>WORKS FOR ARTIST</h3>
      <SliderComp arr={jsonGame} number={1} Slide={Slide} />
    </section>
  );
};

export default WorkOfAdv;
