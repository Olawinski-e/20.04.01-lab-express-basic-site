const express = require("express");
const app = express();

app.use(express.static("public"));

// Home Page Route
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

// Works Page
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works-page.html");
});

// About Page
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

// Gallery Page
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery-page.html");
});

//Server Started
app.listen(3000, () => {
  console.log(`My first app in 3000`);
});
