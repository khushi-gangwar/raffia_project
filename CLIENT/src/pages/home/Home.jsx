import Categories from "../../Components/Categories";
import Slider from "../../Components/Slider/Slider";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Buttons from "../../Components/Buttons/Button";
import "./Home.css"
const Home = () => {
  return (
    <>


    <div className="home">
      <h4 className="text-center my-4">Categories</h4>
      <Categories />

      <h4 className="text-center mb-3">Featured Products</h4>
      <Slider style={{margin:"1rem"}} />

      <Avatar style={{ margin: "auto" }} className="my-3">
        <KeyboardArrowRightIcon />
      </Avatar>

      {/* buttons */}
      <Buttons style={{borderRadius:'0'}} />

      {/* footer */}
      <div
        className="footer"
        style={{ backgroundColor: "black", color: "white",maxWidth:"100%" }}
      >
<img src="images/logo.png" style={{ width: "20%"}} className="mx-3" />      </div>
    </div>  </>
  );
};
export default Home;
