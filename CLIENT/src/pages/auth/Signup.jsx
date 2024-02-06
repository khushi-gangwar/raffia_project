import { Link } from "react-router-dom";
import { useState} from "react";
import './Auth.css'

const Login = () => {
  const [names, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ names, phone, password }),
    });

    const json = await response.json();
    console.log(json);
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      window.location.href = "/home";
  };

  return (
    <div
      style={{ padding: "0em 2em 3em" }}
      className="mx-auto mt-3 form"
    >
      <h3 className="text-center mb-5 mt-5">SignUp</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            name="names"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
          type="text"
            className="form-control"
            id="contact"
            placeholder="Contact Number"
            name="phone"
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            name={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="nav-check d-flex justify-content-between bottom">
          <p style={{ color: "darkgray" }}>Sign in as :</p>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" value="" />
            Buyer
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            Seller
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            Both
          </div>{" "}
        </div>

        <p className="text-center my-5 bottom">
          Already have an Account ?{" "}
          <b>
            <Link to="/" className="text-decoration-none text-dark bottom">
              Login
            </Link>
          </b>{" "}
        </p>
        <div className="d-flex justify-content-between mt-5">
          <button
            type="button"
            className="btn btn-outline-dark form-btn"
            style={{ borderRadius: "0" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-dark form-btn"
            style={{ borderRadius: "0" }}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
