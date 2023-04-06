const express = require('express');

const app = express();

const mongoose = require('mongoose')

require('dotenv').config()

const cons = require('cors');

const corsOption ={
    original:"http://localhost:3000/"
};

app.use(cons(corsOption))

app.use (express.json())

app.use(express.urlencoded({extended:false}));

const users = require("../server/src/router/users")
const auth = require("../server/src/router/auth")
const mail = require("../server/src/router/mail")

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