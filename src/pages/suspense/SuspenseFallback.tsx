import React from "react";
import "./Suspense.scss";

const SuspenseFallback = () => {
  return (
    <div className="spinner-container">
      <div className="loading-box">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default SuspenseFallback;
