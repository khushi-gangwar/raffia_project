import React from "react";
import "./ImageComponent.css";
const ImageComponent = (props) => {
  return (
    <div className="main">
      <div className="slider">
        <div className="slider-wrapper" style={{ margin: ".1em" }}>
          <div className="image-list d-flex">
            <img src={props.image} className="image-item " />
          </div>
        </div>
      </div>
      <p className="z-2 centered ">{props.first}</p>
      <p className="centered-btm ">{props.second}</p>
    </div>
  );
};

export default ImageComponent;
