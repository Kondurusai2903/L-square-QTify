import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carouselright.css";

const CarouselRight = () => {
  let swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className="rightNavigation">
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRight;
