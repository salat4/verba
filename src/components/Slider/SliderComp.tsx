import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MyArrayElement {
  video?: string;
  text: string;
  image?: string;
  title?: string;
}

interface SliderCompProps {
  arr?: MyArrayElement[];
  number: number;
  Slide: React.FC<{ el: MyArrayElement }>;
}

const SliderComp: React.FC<SliderCompProps> = ({ arr, number, Slide }) => {
  const settings = {
    slidesToShow: number,
    infinite: true,
    dots: false,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {arr?.map((el: MyArrayElement) => (
        <Slide el={el} key={el.text} />
      ))}
    </Slider>
  );
};

export default SliderComp;
