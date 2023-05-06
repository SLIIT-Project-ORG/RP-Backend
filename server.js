const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/DBConnection");

const app = express();
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT;



const testRoute = require("./routes/TestRoute");



app.use("/test",testRoute);


app.listen(PORT,()=>{
    console.log(`Application listen to ${PORT} port`);
})