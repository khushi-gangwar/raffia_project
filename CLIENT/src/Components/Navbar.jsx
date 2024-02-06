import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const Navbar = () => {
  return (
    <div
      className="navbar d-flex justify-content-between"
      style={{margin: "1em", padding: "1em" ,alignItems:"center",border:"1px solid gainsboro"}}
    >

    <span style={{padding:".9em",display:"flex",alignItems:"center"}} ><SearchSharpIcon /><p className="my-auto mx-2">Search</p></span> 
    <h2>Rafia World</h2>
      <PersonOutlineOutlinedIcon />
    </div>
  );
};

export default Navbar;
