import Image from "next/image";
import React from "react";
import s from "./Team.module.css";
import image from "../../images/Team.jpg";
const Team = () => {
  return (
    <section className={`${s.section__Team}`}>
      <div>
        <div className={s.videoContainer}>
          <video className={s.video} playsInline autoPlay loop muted>
            <source
              src={require("../../Video/TeamLiquid.mp4")}
              type="video/mp4"
            />
          </video>
          <Image src={image} className={s.verbaImage} alt="Verba MUSIC" />
        </div>
        <div className={s.Team__text}>
          <p className={s.Team__title}>VERBA MUSIC</p>
          <p>
            We are a family of music enthusiasts from Ukraine who have a love
            and passion for music and want to change Ukrainian culture and help
            our music rise to a new level. With other creators we develop our
            vision and style, collaborating with artists, working for gaming and
            commercials.
          </p>
        </div>
      </div>
      <h2>Team</h2>
    </section>
  );
};

export default Team;
