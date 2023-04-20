const express = require("express");
const mongoose = require("mongoose");
const User = require("../backend/models/userModel");
const app = express();
app.use(express.json());

// GET API
app.use("/getdata", (req, res) => {
    let obj = [
        { id: 123, title: "News Heading 1", imgUrl: "https://www.imgURL.com" },
        { id: 456, title: "News Heading 2", imgUrl: "https://www.imgURL.com" },
        { id: 789, title: "News Heading 3", imgUrl: "https://www.imgURL.com" },
    ]
    let arr = [1, 2, 3];
    res.status(200).json({ data: obj })
})

// POST API
app.use("/postuserdata", async (req, res) => {
    const { email, name, password }  = req.body;
    let data = await User.create({
        email,
        password,
        name
    })
    res.status(200).json({ data: data });
})

// GET All User data
app.use("/getuserdata", async (req, res) => {
    let data = await User.find({});
    res.status(200).json({ data: data });
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