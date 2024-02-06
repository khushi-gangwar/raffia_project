import "./Slider.css";
const Sliders = () => {

  return (

    <div className='slider'>
         <div className="slider-wrapper">
        <div className="image-list d-flex" >
          <img src="/images/bag.jpg" style={{width:"50%"}} className='image-item' />
          <img src="/images/basket.jpg" style={{width:"50%"}} className='image-item'/>
          <img src="/images/fabric.jpg" style={{width:"50%"}} className='image-item'/>
          <img src="/images/hangers.jpg" style={{width:"50%"}} className='image-item'/>
          <img src="/images/store.jpg" style={{width:"50%"}} className='image-item'/>
        </div>
      </div>
    </div>
    

  )
}

export default Sliders