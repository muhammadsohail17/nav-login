import React from "react";
import Navbar from "../Navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="page-heading">
        <h1>{localStorage.getItem("userInfo")}</h1>
        <p></p>
      </div>
    </>
  );
}

export default Home;
