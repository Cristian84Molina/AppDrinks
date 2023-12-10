const express = require("express");
const router = express();
const morgan = require("morgan");
require('dotenv').config();
const {conex} = require('./dbConex');
const port = process.env.PORT_SERVER || 3002;

//midleweares
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(morgan("dev"));

conex.sync({ alter: true }).then(() => {
    router.listen(port, () => {
      console.log(`Server Running on port ${port}`);
   });
});