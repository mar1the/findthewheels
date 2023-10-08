import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import carsRoute from "./routes/cars.js"
import bookRoute from "./routes/book.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async() => {
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DATABASE")
} catch (error) {
   throw error
    }
};

mongoose.connection.on("disconnected",  ()=>{
    console.log("MongoDB disconnected")
})

//yung middlewares

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/cars", carsRoute);
app.use("/api/book", bookRoute);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Somethin went work"
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})


app.get("/users", (req,res)=>{
    res.send("hello first request!")
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to API!")
});
