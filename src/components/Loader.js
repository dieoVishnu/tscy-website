import React from "react";
import "./style/loader.css";

export default function Loader() {
  return (
    <div className="loader-first">
      <img
        src="/assets/images/loader.gif"
        alt="Loader"
        style={{ width: "150px" }}
      />
    </div>
  );
}
