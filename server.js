
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary JSON array to store users
let users = [];

// POST method - Register a user
app.post("/register", (req, res) => {

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    };

    users.push(user);

    res.status(201).json({
        message: "User registered successfully!",
        user: user
    });

});

// GET method - Display all registered users
app.get("/register", (req, res) => {

    res.json(users);

});

// LISTEN method - Start server on port 5000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
