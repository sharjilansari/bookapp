const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const User = require("../bookappbackend/models/userModel");

const app = express();
app.use(express.json());
app.use(cors());

//POST API
app.use("/postuserdata", async (req, res) => {
    const { author, title, ISBN } = req.body;
    let data = await User.create({
        title,
        author,
        ISBN
    })
    res.status(200).json({ data: data });
})

//GET API
app.use("/getuserdata", async (req, res) => {
    let data = await User.find({});
    res.status(200).json({data: data})
})


mongoose.connect("mongodb+srv://mohdsharjil:1234@cluster0.pvtvgex.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
})


app.listen(5000, (req, res) => {
    console.log("Application started on port 5000");
})