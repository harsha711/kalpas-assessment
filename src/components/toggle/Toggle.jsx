import React from "react";
import { TableRows, ViewColumn } from "@mui/icons-material";
import "./Toggle.css";

export default function Toggle({ toggleVal, toggleSwitch }) {
  return (
    <>
      <h3 align="center">View Toggle</h3>
      <div className="toggleButtonsContainer">
        <button
          className={`toggleButton btn ${
            !toggleVal ? "button-active" : "btn-secondary"
          }`}
          onClick={() => toggleSwitch(false)}
        >
          <TableRows />
        </button>
        <button
          className={`toggleButton btn ${
            toggleVal ? "button-active" : "btn-secondary"
          }`}
          onClick={() => toggleSwitch(true)}
        >
          <ViewColumn />
        </button>
      </div>
    </>
  );
}
