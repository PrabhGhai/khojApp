import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchitem } from "./store/index";
const Search = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const img = require("./images/khoj.png");
  const [value, setvalue] = useState("");
  const change = (e) => {
    setvalue(e.target.value);
  };
  const submit = () => {
    if (value == "") {
      window.alert("Please Add Text To Search");
    } else {
      history("/home");
      dispatch(searchitem.searchkey(value));
    }
  };
  return (
    <>
      <div
        className="App container d-flex justify-content-center align-items-center flex-column "
        style={{ height: "80vh" }}
      >
        <img
          className="img-fluid"
          src={img}
          alt="/"
          style={{ width: "350px", height: "270px" }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <input
            type="text"
            placeholder="Search or type a URL"
            size="50"
            value={value}
            onChange={change}
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
            onClick={submit}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
