const express = require("express");
const app = express();
const routes = require('./routes/indexRoutes');
const morgan = require("morgan");
require('dotenv').config();
const {conex} = require('./dbConex');
const port = process.env.PORT_SERVER || 3002;
process.env.TZ = 'America/Argentina/Buenos_Aires';


const cors = require('cors');

app.use(cors())

//midleweares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(routes);

conex.sync({ alter: true }).then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
   });
});

