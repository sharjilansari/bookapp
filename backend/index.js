const express = require("express");
const app = express();

app.use("/getdata", (req, res) => {
    let obj = [
        { id: 123, title: "News Heading 1", imgUrl: "https://www.imgURL.com" },
        { id: 456, title: "News Heading 2", imgUrl: "https://www.imgURL.com" },
        { id: 789, title: "News Heading 3", imgUrl: "https://www.imgURL.com" },
    ]
    res.status(200).json({ data: obj })
})

app.listen(5000, (req, res) => {
    console.log("Application started on port 5000");
})