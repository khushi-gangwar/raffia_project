import "./Slider.css";
import ImageComponent from "./ImageComponent";
const Sliders = () => {
const images=[
  "/images/bag.jpg",
  "/images/basket.jpg",
  "/images/fabric.jpg",
  "/images/hangers.jpg",
  "/images/store.jpg"
];

  return (

    <div className='slider'>
         <div className="slider-wrapper">
        <div className="image-list d-flex" >
        {images.map((image, index) => (
            <ImageComponent key={index} image={image} style={{width:"100%"}} className='image-item '/>
          ))}
       
        </div>
      </div>
    </div>
    

  )
}

export default Sliders