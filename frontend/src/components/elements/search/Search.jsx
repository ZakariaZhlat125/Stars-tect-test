import { Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import "./search.scss";
import SearchIcon from '@mui/icons-material/Search';
const Search = (props) => {
  const { isScrolled } = props;
  return (
    <div
      style={{
        width: isScrolled ? "300px" : "700px",
      }}
      id="search"
    >
      <div>
        <div className={`search-input ${isScrolled ? "secolled-input" : ""}`}>
          <p>{isScrolled ? "Any Where" : "Where"}</p>
          {!isScrolled && (
            <input
              type="text"
              placeholder="Search destinations   "
              id="filled-required"
            />
          )}
        </div>
      </div>

      <Divider orientation="vertical" variant="middle" flexItem />

      <div>
        <div className={`search-input ${isScrolled ? "secolled-input" : ""}`}>
          <p>{isScrolled ? "Any Date" : "Date"}</p>
          {!isScrolled && (
            <input type="text" placeholder="Add Dates" id="filled-required" />
          )}
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />

      <div>
        <div className={`search-input ${isScrolled ? "secolled-input" : ""}`}>
          <p>{isScrolled ? "Add guests" : "Who"} </p>
          {!isScrolled && (
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Add guests"
                id="filled-required"
              />
              <SearchIcon
                style={{
                  position: "absolute",
                  right: "10px",
                  transform: "translateY(-50%)",
                  color: "white",
                  stroke: "white",
                  backgroundColor: "#FF385C",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
