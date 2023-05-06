const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/DBConnection");

const app = express();
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT;


//Import your routes here
const testRoute = require("./routes/TestRoute");


//Set to your routes to express app
app.use("/test",testRoute);


app.listen(PORT,()=>{
    console.log(`Application listen to ${PORT} port`);
})