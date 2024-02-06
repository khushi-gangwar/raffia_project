import connectToMongo from "./db.js";
import express from 'express';
import cors from 'cors';
import router from "./routes/auth.js";
connectToMongo();
const app=express();
const port =5000;

app.use(express.json());
app.use(cors());

//available routes
app.use('/api/auth',router);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});