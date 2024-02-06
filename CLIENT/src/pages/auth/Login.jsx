import { Link } from "react-router-dom";
import { useState } from "react";
import './Auth.css'
const Login = () => {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });

    const json = await response.json();
    console.log(json);
    //save the auth token and redirect
    localStorage.setItem("token", json.authtoken);
    window.location.href = "/home";
  };
  return (

    <>
    
    <div
      style={{  padding: "0em 2em 3em" }}
      className="mx-auto mt-3 form"
    >
      <h3 className="text-center mb-5 mt-5">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Contact Number"
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            autoComplete="off"
            name={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <p className="text-center bottom">Forget Password?</p>
        <p className="text-center mb-5 bottom">
          New to Raffia World ?
          <b>
            {" "}
            <Link to="/create" className="text-decoration-none text-dark bottom">
              Create new Account
            </Link>
          </b>{" "}
        </p>
        <div className="d-flex justify-content-between mt-5">
          <button
            type="button"
            className="btn btn-outline-dark form-btn"
            style={{ borderRadius: "0"}}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-dark form-btn"
            style={{ borderRadius: "0" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </>

  );
};

export default Login;
