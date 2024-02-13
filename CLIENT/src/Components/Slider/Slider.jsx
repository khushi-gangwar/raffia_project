import "./Slider.css";
import ImageComponent from "../SliderImage/ImageComponent";
const Sliders = () => {


  return (


      <div className='slider'>
         <div className="slider-wrapper" style={{margin:"1em"}}>
    <div className="image-list d-flex">
      <ImageComponent  image= "/images/bag.jpg" first="Jumbo Bags" second="Starting from $100"/>
<ImageComponent  image= "/images/store.jpg" first=" Fabric" second="Fabric from $100"/>
<ImageComponent  image= "/images/basket.jpg" first="Jumbo Bags" second="Starting from $100"/>
<ImageComponent  image= "/images/hangers.jpg" first=" Fabric" second="Fabric from $100"/>
    </div>
    </div></div>


  )
}

export default Sliders