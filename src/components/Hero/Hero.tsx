import React from 'react'
import s from './Hero.module.css'
import verba from '../../images/VerbaMusic.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className={`${s.heroSectionContainer}`}>
    <div className={s.videoContainer}>
      <video
        className={s.video}
        playsInline
        autoPlay
        loop
        muted>
        <source  src={require("../../Video/Hero.mp4")} type="video/mp4" />
        </video>
      <div className={s.title}>
        <div className={s.heroText}>
            <h1 className={s.Hero_seo}>Verba music</h1>
            <p className={s.Hero__welcome}>Welcome{' '} to</p>
            <Image
                src={verba}
                layout="responsive"
                className ={s.verbaImage}
                alt="Verba MUSIC"
            />
            <p className={s.Hero__music}>Music</p>
            <button className={s.Hero__button}>Learn more</button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero


