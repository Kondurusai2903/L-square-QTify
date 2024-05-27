import React, { useEffect } from "react";

// Import Swiper React components and hooks
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from "./carouselLeft/carouselleft";
import CarouselRight from "./carouselright/carouselright";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import { Navigation } from "swiper/modules";

const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {
    //swiper.slideTo(index, speed, runCallbacks(optional))
    swiper.slideTo(0, 1);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className="wrapper">
      <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
