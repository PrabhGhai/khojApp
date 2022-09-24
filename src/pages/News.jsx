import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const News = () => {
  const [data, setdata] = useState();
  const searchkey = useSelector((state) => state.key);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/news/q=${searchkey}`,
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
          setdata(response.data.entries);
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
      <div className="container my-3" style={{ minHeight: "90vh" }}>
        <h4 style={{ fontFamily: "sans-serif" }}>Top news</h4>
        <hr />
        {data ? (
          data.map((items, key) => (
            <div
              className="d-flex justify-content-start align-items-start flex-column my-3 "
              style={{ borderBottom: "1px solid silver" }}
            >
              <p className="mb-0">
                <a
                  href={items.source.href}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  target="blank"
                >
                  {items.source.title}
                </a>
              </p>
              <h6
                style={{
                  color: "blue",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  cursor: "pointer",
                }}
              >
                <a
                  href={items.source.href}
                  style={{ textDecoration: "none" }}
                  target="blank"
                >
                  {items.title}
                </a>
              </h6>
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

export default News;
