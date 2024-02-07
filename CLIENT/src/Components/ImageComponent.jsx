import React from 'react';
import "./ImageComponent.css"
const ImageComponent = ({ image, style, className }) => {
  return (
    <div className='main'>
  <img src={image} alt="slider-image" style={style} className={className}/>
<p className='z-2 centered '>Jumbo Bags</p>
<p className="centered-btm ">Starting from $100</p>
    </div>
);
};

export default ImageComponent;