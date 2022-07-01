import React from "react";
import "./style/loader.css";

export default function Loader() {
  return (
    <div className="loader-spin">
      <img
        src="/assets/images/loader.gif"
        alt="Loader"
      />
    </div>
  );
}
