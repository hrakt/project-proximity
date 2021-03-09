import { useState } from "react";

const ViewSelector = ({ setViewSelector }) => {
  return (
    <div className="selector-wrapper">
      <a className="selector" onClick={() => setViewSelector("list")}>
        List
      </a>
      <a className="selector" onClick={() => setViewSelector("map")}>
        Map
      </a>
    </div>
  );
};

export default ViewSelector;
