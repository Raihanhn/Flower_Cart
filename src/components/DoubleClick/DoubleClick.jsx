import React, { useState } from "react";
import "./doubleclick.css";

const DoubleClick = () => {
  const [imageSrc, setImageSrc] = useState("/src/assets/lychee.jpg");

  const handleDoubleClick = () => {
    setImageSrc("/src/assets/mngo.jpg");
  };

  return (
    <div className="btn">
      <button className="button" onDoubleClick={handleDoubleClick}>
        Double Click
      </button>
      <div className="imgdiv">
        <img src={imageSrc} alt="Dynamic" />
      </div>
    </div>
  );
};

export default DoubleClick;
