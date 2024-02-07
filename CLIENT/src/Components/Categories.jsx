import { green, pink, blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ReorderIcon from "@mui/icons-material/Reorder";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Categories = () => {
  return (
    <div className="mx-auto ">
      <Stack
        direction="row"
        spacing={3}
        display={"flex"}
        justifyContent={"center"}
      >
        <span className="d-flex flex-column justify-content-center mx-3">
          <Avatar style={{margin:"auto"}} className="shadow-sm">
            <ShoppingBagIcon />
          </Avatar>
          <p className="card-body">Jumbo bags</p>
        </span>

        <span className="d-flex flex-column justify-content-center mx-3">
          <Avatar sx={{ bgcolor: pink[500] }} style={{margin:"auto"}} className="shadow-sm">
            <ShoppingBagIcon />
          </Avatar>
          <p className="card-body">Woven bags</p>
        </span>

        <span className="d-flex flex-column justify-content-center mx-3">
          
          <Avatar sx={{ bgcolor: green[500] }} style={{margin:"auto"}} className="shadow-sm"> 
            <ReorderIcon />
          </Avatar>
          <p className="card-body">Fabric</p>

        </span>

        <span className="d-flex flex-column justify-content-center mx-3">
          {" "}
          <Avatar sx={{ bgcolor: blue[500] }} style={{margin:"auto"}} className="shadow-sm">
            <ShoppingBagIcon />
          </Avatar>
          <p className="card-body">PP bags</p>

        </span>

        <span className="d-flex flex-column justify-content-center mx-3">
          {" "}
          <Avatar style={{margin:"auto"}} className="shadow-sm ">
            <ReorderIcon />
          </Avatar>
          <p className="card-body">Fabric bags</p>

        </span>

        <span className="d-flex flex-column justify-content-center mx-3">
          {" "}
          <Avatar sx={{ bgcolor: pink[500] }} style={{margin:"auto"}} className="shadow-sm ">
            <ShoppingBagIcon />
          </Avatar>
          <p className="card-body">Jumbo bags</p>

        </span>

        <span className="d-flex flex-column justify-content-center mx-3 ">
      
          <Avatar style={{margin:"auto" }}>
            <KeyboardArrowRightIcon />
          </Avatar>
          <p className="card-body">More</p>


        </span>
      </Stack>
    </div>
  );
};

export default Categories;
