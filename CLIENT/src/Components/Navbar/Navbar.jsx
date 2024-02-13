import { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      className="navbar d-flex justify-content-between "
      style={{
        // margin: "1.2em 1.3em 0",
        padding: ".3em",
        alignItems: "center",
        border: "3px solid #e1e1e1",
      }}
    >
      <span
        style={{
          marginLeft: "3em 0",
          display: "flex",
          alignItems: "center",
          color: "gray",
        }}
      >
        <SearchSharpIcon />
        <p className="my-auto mx-2 search">Search</p>
      </span>
      <img src="images/logo.png"  className="nav-img" />

      {isLoggedIn ? (
        <PersonOutlineOutlinedIcon onClick={handleLogout} />
      ) : (
        <Link to="/login">
          <LoginIcon />{" "}
        </Link>
      )}
    </div>
  );
};

export default Navbar;
