import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carouselleft.css";

const CarouselLeft = () => {
  let swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      // to set the state when ever we change the slide, to control conditional rendering of left arrow button
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className="leftNavigation">
      {/* don't show left arrow when we are on the left most card */}
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeft;
