import React from 'react'
import "./CategoriesData.css"
const CategoriesData = (props) => {
  return (
    <>
    <div >
  
  <span className="d-flex flex-column justify-content-evenly">

   <img src={props.imgsrc} style={{borderRadius:"50px", border:"1px solid #e1e1e1"}} className="category"/>          
    <p className="card-body">{props.title}</p>
  </span>
</div>
    </>
  )
}

export default CategoriesData
