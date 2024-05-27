// import React from "react";
// import img from "../../assets/logo.png";
// import styles from "./logo.css";
// const Logo = () => {
//   return (
//     <div>
//       <img src={img} alt="logo" className={styles.logo} />
//     </div>
//   );
// };

// export default Logo;

import React from "react";
import "./logo.css";
import LogoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logoDiv">
      <img src={LogoImg} width={67} alt="logo" />
    </div>
  );
};

export default Logo;
