import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const PORT  = parseInt(process.env.PORT) || 3000; 

//Global middleware
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world!!!");
});

const server = app.listen(PORT, (req, res) => {
    console.log(`server is listing at port: ${PORT}`);
});