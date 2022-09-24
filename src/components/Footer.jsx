import React from "react";

const Footer = () => {
  const img = require("../images/khoj.png");
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={img} alt="/" style={{ width: "100px", height: "80px" }} />
      </div>
      <div className="d-flex justify-content-center align-items-center bg-primary ">
        <h5
          style={{ fontFamily: "sans-serif" }}
          className="text-white mb-0 py-3"
        >
          Developed By Prabhjot Singh
        </h5>
      </div>
    </>
  );
};

export default Footer;
