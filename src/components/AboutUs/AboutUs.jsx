import Image from "next/image";
import React from "react";
import s from "./AboutUs.module.css";
import Mobile from "../Svg/Mobile";
import Email from "../Svg/Email";
import Music from "../Svg/Music";
import face from "../../images/face.png";
function AboutUs() {
  const svgLoader = ({ src }) => `${src}`;

  return (
    <section className={s.aboutUs}>
      <h2 className={s.aboutUs__tilte}>About Us</h2>
      <ul className={s.aboutUs__list}>
        <li className={s.aboutUs__item}>
          <Image layout="responsive" alt="face" src={face} />
          <div className={s.aboutUs__box}>
            <p className={s.aboutUs__name}>Mykyta</p>
            <ul className={s.aboutUs__description}>
              <li className={s.aboutUs__decription__item}>
                <Music />
                <p>Music producert</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Mobile />
                <p>about</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Email />
                <p>hello@reallygreatsite.com</p>
              </li>
            </ul>
          </div>
        </li>
        <li className={s.aboutUs__item}>
          <Image layout="responsive" alt="face" src={face} />
          <div className={s.aboutUs__box}>
            <p className={s.aboutUs__name}>Mykyta</p>
            <ul className={s.aboutUs__description}>
              <li className={s.aboutUs__decription__item}>
                <Music />
                <p>Music producert</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Mobile />
                <p>about</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Email />
                <p>hello@reallygreatsite.com</p>
              </li>
            </ul>
          </div>
        </li>
        <li className={s.aboutUs__item}>
          <Image layout="responsive" alt="face" src={face} />
          <div className={s.aboutUs__box}>
            <p className={s.aboutUs__name}>Mykyta</p>
            <ul className={s.aboutUs__description}>
              <li className={s.aboutUs__decription__item}>
                <Music />
                <p>Music producert</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Mobile />
                <p>about</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Email />
                <p>hello@reallygreatsite.com</p>
              </li>
            </ul>
          </div>
        </li>
        <li className={s.aboutUs__item}>
          <Image layout="responsive" alt="face" src={face} />
          <div className={s.aboutUs__box}>
            <p className={s.aboutUs__name}>Mykyta</p>
            <ul className={s.aboutUs__description}>
              <li className={s.aboutUs__decription__item}>
                <Music />
                <p>Music producert</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Mobile />
                <p>about</p>
              </li>
              <li className={s.aboutUs__decription__item}>
                <Email />
                <p>hello@reallygreatsite.com</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AboutUs;
