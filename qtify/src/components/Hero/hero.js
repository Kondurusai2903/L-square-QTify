// import React from 'react'

// const Hero = () => {
//   return (
//     <div>hero</div>
//   )
// }

// export default Hero;
import React from "react";
import HeroImage from "../../assets/hero_headphones.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="HeroTitle">
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img className="HeroImage" src={HeroImage} alt="headphone" />
      </section>
    </>
  );
};

export default Hero;
