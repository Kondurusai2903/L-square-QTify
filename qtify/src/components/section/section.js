import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/card";
import "./section.css";
import Carousel from "../carousel/carousel";

const Section = ({ type, title, data, toggle = true }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className="sectionTop">
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className="toggleText">
          {toggle ? carouselToggle ? "Show All" : "Collapse All" : <></>}
        </h4>
      </div>

      {data.length ? (
        <div className="sectionInnerWrapper">
          {!carouselToggle ? (
            <div className="showAllWrapper">
              {data.map((album) => (
                <Card data={album} type={type} key={album.id} />
              ))}
            </div>
          ) : (
            <div>
              <Carousel
                data={data}
                renderCardComponent={(data) => <Card data={data} type={type} />}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="progressBar">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Section;
