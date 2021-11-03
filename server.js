const express = require("express");
const Games = require('./models/games');
const cors = require('cors');

const app = express();


app.use(cors());

app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    });
});


app.get("/api/games", (req, res) => {
    // send the turtles array as JSON
    res.json(Games);
});


app.listen(1337, () => console.log("Listening on port 1337"));
