import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";

const MovieLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
