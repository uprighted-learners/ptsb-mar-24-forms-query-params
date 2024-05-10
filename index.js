// Import necessary packages
const express = require("express");
const cors = require("cors");

const app = express(); // Open express package instance

// Setup for making our server work to our needs
app.use(express.json()); // Allow the server to understand json
app.use(express.urlencoded({ extended: false })); // Allow body parsing for sending data from HTML Form
app.use(cors()); // Allow communication between frontend and backend


const port = 3000; // Identify port number. If already taken, use others like 3001, 8000, 8080.

// Routes

// Params (:) - need to identify the params within the route
app.get("/github/:user/:repo/:section/:branch/:filepath", (req, res) => {
    console.log(req.params); 
    res.send("GET Route hit");
})

// Query Params (?) - what the url has within the route as query params will be caught within req.query
app.get("/github/query", (req, res) => {
    console.log(req.query);
    res.send("GET Route hit");
})

// GET Route. Hitting this route will redirect us to a different route
app.get("/send_to_link", (req, res) => {
    res.redirect("/redirected_link"); // Redirect us to route '/redirected_link'
})

// Route that we were redirected to
app.get("/redirected_link", (req, res) => {
    res.json("Redirected Link"); // Send back response of 'Redirected Link' text from this route
})

// POST Request. To reach, go to 'localhost:3000/login' and send some data as part of the body.
app.post("/login", (req, res) => {
    console.log(req.body);
    // Making response object to send as the response from this route
    const successResponse = {
        success: "Login route hit"
    }

    // Send response of status code 201 with response object
    res.status(201).send(successResponse);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});