import React, { useEffect, useState } from "react";
import "./css/Home.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setdata] = useState();
  const searchkey = useSelector((state) => state.key);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchkey}`,
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
          setdata(response.data.results);
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
      <div className="my-4 container" style={{ minHeight: "90vh" }}>
        {data ? (
          data.map((items, index) => (
            <div className="row ">
              <div className=" col-lg-12 col-12 result d-flex justify-content-start flex-column my-2 ">
                <p className="mb-1">
                  <a href={items.link} target="blank">
                    {items.link.substr(0, 40)}...
                  </a>
                </p>
                <h5
                  className="text-primary"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <a href={items.link} target="blank">
                    {items.title}
                  </a>
                </h5>
                <div
                  className="d-flex"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            Loading...
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Home;
