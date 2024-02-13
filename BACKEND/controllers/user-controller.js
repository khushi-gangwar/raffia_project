import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorMessage } from "../validation/user-validation.js";

const JWT_SECRET = "KHUSHHHHH";

//ROUTE 1:CREATE  A USER USING POST "api/auth/createUser".No login required.
const createUser = async (req, res) => {
errorMessage(req, res);
  try {
    let user = await User.findOne({ phone: req.body.phone });
    if (user)  return res.status(400).json({ error: "sorry a user with this phone already exists" });
    //create a new user
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      names: req.body.names,
      phone: req.body.phone,
      password: secPass,
    });
    const data = {user: {id: user.id}};
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken });
    } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
};

//Route 2:Authenticate a user using: POST "api/auth".No login required.
const signup = async (req, res) => {
  errorMessage(req, res);
  const { phone, password } = req.body;
  try {
    let user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ error: "Please try to login with correct credentials" });    
    const passwordCompare = bcrypt.compare(password, user.password);
    if (!passwordCompare) return res.status(400).json({ error: "Please try to login with correct credentials" });
    const data = {user: {id: user.id}};
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken, user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occured");
  }
};
export default { createUser, signup };
