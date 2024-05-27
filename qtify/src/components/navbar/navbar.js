// import React from "react";
// import Logo from "../navbar/navbar";
// import Button from "../Button/button";
// import SearchBar from "../SearchBar/searchbar";
// import "./navbar.css";
// const Navbar = () => {
//   return (
//     <div className="wrapper">
//       <Logo />
//       <SearchBar input={"search a album of your choice"} />
//       <Button input={"Give Feedback"} />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./navbar.css";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/searchbar";
import Button from "../Button/button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SearchBar search={"Search a song of your choice"} />
        <Button children={"Give Feedback"} />
      </nav>
    </>
  );
};

export default Navbar;
