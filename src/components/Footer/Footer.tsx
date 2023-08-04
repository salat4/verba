import React from "react";
import s from "./Footer.module.css";
import Home from "../Svg/Home";
import Instagram from "../Svg/Instagram";
import Linkedin from "../Svg/Linkedin";
import Telegram from "../Svg/Telegram";
function Footer() {
  return (
    <section className={s.footer}>
      <p className={s.title}>Lets get in contact</p>
      <div className={s.box}>
        <p className={s.social}>Socials</p>
        <div className={s.svg}>
          <Home />
        </div>
        <div className={s.svg}>
          <Instagram />
        </div>

        <div className={s.svg}>
          <Linkedin />
        </div>
        <div className={s.svg}>
          <Telegram />
        </div>
      </div>
    </section>
  );
}

export default Footer;
