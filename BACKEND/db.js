import  mongoose from "mongoose";
const mongoURI = "mongodb://localhost:27017/demo?readPreference=primary&tls=false&directConnection=true"

const connectToMongo =()=>{
    mongoose.connect(mongoURI),
        console.log("connected to mongo successfully");  
}
export default connectToMongo;