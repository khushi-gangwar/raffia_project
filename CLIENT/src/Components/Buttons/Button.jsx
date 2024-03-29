import React from 'react'
import "./Buttons.css"
const Buttons = ({style}) => {
  return (
    <div className="home-button d-flex justify-content-center my-3">
        <button type="button" className="btn btn-dark mx-3 button" style={style}>Browse as guest</button>
        <button type="button" className="btn btn-dark mx-3 button" style={style}>Browse as member</button>
    </div>
  )
}

export default Buttons;