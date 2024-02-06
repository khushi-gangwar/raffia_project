import express from "express";
import {body} from "express-validator"
import userControllers from "../controllers/user-controller.js"

const router =express.Router();

 //ROUTE 1:CREATE  A USER USING POST "api/auth/createUser".No login required.
router.post('/createUser',[
    body('names','Enter a valid name').isLength({min:3}),
    body('phone','Enter a valid phone').isLength({max:10}),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
], userControllers.createUser);


//Route 2:Authenticate a user using: POST "api/auth".No login required.
router.post('/',[
    body('phone','Enter a valid phone no.').isLength({max:10}),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
], userControllers.signup);

export default router;
