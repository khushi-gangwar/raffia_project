import Categories from "../../Components/Categories"
import Slider from "../../Components/Slider"
import Avatar from "@mui/material/Avatar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {
  return (
    <div className='home'>
        <h4 className="text-center my-5">Categories</h4>
<Categories/>
    <h4 className="text-center my-5">Featured Products</h4>
  <Slider/>
  <Avatar style={{margin:"auto" }}>
            <KeyboardArrowRightIcon />
          </Avatar>
  <div className="home-button d-flex justify-content-center my-3">
  <button type="button" className="btn btn-dark mx-3">Browse as guest</button>
  <button type="button" className="btn btn-dark mx-3">Browse as member</button>
  </div>
  <div className="footer" style={{backgroundColor:"black",color:"white", height:"30vh"}}>
    <p className="text-center my-5">© 2022 Raffia. All rights reserved</p>
  </div>
    </div>
  )
}

export default Home