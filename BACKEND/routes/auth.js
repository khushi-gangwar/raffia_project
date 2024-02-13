import express from "express";
import {body} from "express-validator"
import userControllers from "../controllers/user-controller.js"
import { userValidation } from "../validation/user-validation.js";

const router =express.Router();

 //ROUTE 1:CREATE  A USER USING POST "api/auth/createUser".No login required.
router.post('/createUser',(userValidation), userControllers.createUser);


//Route 2:Authenticate a user using: POST "api/auth".No login required.
router.post('/login',(userValidation), userControllers.signup);

export default router;
