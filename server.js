const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/DBConnection");

//Swagger config
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

const app = express();
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT;

//Import your routes here
const testRoute = require("./routes/TestRoute");
const userRoute = require("./routes/UserRoute");

//Set to your routes to express app
app.use("/test",testRoute);
app.use("/user",userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT,()=>{
    console.log(`Application listen to ${PORT} port`);
})