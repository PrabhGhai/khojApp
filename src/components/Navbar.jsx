import React from "react";
import { BsImage } from "react-icons/bs";
import { MdOutlineVideoSettings, MdScreenSearchDesktop } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import "./css/Navbar.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchitem } from "../store";
const Navbar = () => {
  const img = require("../images/khoj.png");
  const dispatch = useDispatch();
  const [Value, setValue] = useState();

  const click = async () => {
    dispatch(searchitem.searchkey(Value));
  };

  const change = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div style={{ borderBottom: "1px solid silver" }} className="">
        <div className="container   d-flex justify-content-center align-items-center ">
          <div className=" d-block d-md-flex d-lg-flex  align-items-center justify-content-center p-2">
            <div className="d-flex justify-content-center align-items-center  ">
              <div className="d-flex justify-content-center align-items-center  ">
                <img
                  style={{ width: "100px", height: "80px" }}
                  src={img}
                  alt="/"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <input
                type="text"
                placeholder="Search or type a URL"
                size="50"
                onChange={change}
                value={Value}
                style={{
                  outline: "none",
                  border: "none",
                  border: "1px solid silver",
                  borderRadius: "20px",
                  boxShadow: "1px 1px 3px silver",
                }}
                className="py-2 px-4 ms-0 ms-md-5 ms-lg-5 my-3 my-md-0 my-lg-0 container "
              />
              <AiOutlineSearch
                className=" search mx-2"
                style={{ fontSize: "24px", cursor: "pointer" }}
                onClick={click}
              />
            </div>
          </div>
        </div>
        <div className="mb-3 container postnavbar ">
          <div className="container d-flex justify-content-around justify-content-lg-between w-50">
            <Link
              to="/home"
              className=" d-flex justify-content-center align-items-center ms-0 me-lg-0"
            >
              <MdScreenSearchDesktop className="mx-1" />
              All
            </Link>
            <Link
              to="/images"
              className=" d-flex justify-content-center align-items-center ms-3 me-lg-0"
            >
              <BsImage className="mx-1" />
              Images
            </Link>
            <Link
              to="/videos"
              className=" d-flex justify-content-center align-items-center ms-3 me-lg-0"
            >
              <MdOutlineVideoSettings className="mx-1" />
              Videos
            </Link>
            <Link
              to="/news"
              className=" d-flex justify-content-center align-items-center ms-3 me-lg-0"
            >
              <GiNewspaper className="mx-1" />
              News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
