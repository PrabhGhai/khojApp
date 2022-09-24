import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/Images.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Images = () => {
  const [data, setdata] = useState();
  const searchkey = useSelector((state) => state.key);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchkey}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "a6e171dc88msh45dd64dec7ad1f5p148829jsn88422ad19251",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .request(options)
        .then(function (response) {
          setdata(response.data.image_results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchdata();
    setdata("");
  }, [searchkey]);

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center flex-wrap my-3"
        style={{ minHeight: "90vh" }}
      >
        {data ? (
          data.map((items, key) => (
            <div className=" img-section d-flex flex-column justify-content-center align-items-start">
              <img
                src={items.image.src}
                className="mx-2 my-2"
                style={{ width: "250px ", height: "200px", objectFit: "fill" }}
              />
              <p className="m-0 ms-2" style={{ fontSize: "12px" }}>
                <a href={items.link.href} target="blank">
                  {items.link.title.substr(0, 40)}...
                </a>
              </p>
            </div>
          ))
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              Loading...
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Images;
