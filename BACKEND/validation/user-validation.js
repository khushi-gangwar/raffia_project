import {body} from "express-validator"
import { validationResult } from "express-validator";

export const userValidation = [
    body('names','Enter a valid name').isLength({min:3}),
    body('phone','Enter a valid phone').isLength({max:10}),
    body('password','Password must be atleast 5 characters').isLength({min:5}),

];
export const errorMessage = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
}