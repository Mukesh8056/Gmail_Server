const express = require('express');

const app = express();

const mongoose = require('mongoose')

require('dotenv').config()

const cors = require('cors');

const corsOption ={
    original:"http://localhost:3000/"
};

app.use(cors(corsOption))

app.use (express.json())

app.use(express.urlencoded({extended:false}));

const users = require("./src/router/users")
const auth = require("./src/router/auth")
const mail = require("./src/router/mail")

app.use("/users", users)
app.use("/auth", auth)
app.use("/api/mail", mail)

const PORT = process.env.PORT || 8080

const connectionParams = {
    useNewUrlParser: true,
};
try {
    mongoose.connect(process.env.ATLAS, connectionParams);
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}

app.listen(PORT,()=>{

    console.log(`SERVER IS RUNNING IN ${PORT}`);
})

app.get("/",(req,res)=>{

    res.send({message:"welcome to Gmail"})
})