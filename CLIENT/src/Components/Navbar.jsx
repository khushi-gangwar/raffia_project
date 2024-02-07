import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const Navbar = () => {
  return (
    <div
      className="navbar d-flex justify-content-between "
      style={{margin: "1.5em 3.8em 0", padding: "1.2em" ,alignItems:"center",border:"3px solid #e1e1e1"}}
    >

    <span style={{padding:".9em 0",display:"flex",alignItems:"center"}} ><SearchSharpIcon /><p className="my-auto mx-2">Search</p></span> 
    <h2>Rafia World</h2>
      <PersonOutlineOutlinedIcon />
    </div>
  );
};

export default Navbar;
