import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    names:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    
},
{
     timestamps:true 
});
export default mongoose.model("User",UserSchema)