// import dependencies
const express = require('express')
const app = express();
const cors = require("cors")
// apply cors and express settings 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// add the env file
require('dotenv').config();
const port = process.env.PORT

require("./config/mongoose.config")

// routes
const routes = require("./routes/product.routes");
routes(app);


// 'plugging server in'
app.listen(port, () => console.log(`🧠 Server open on port: ${port}`))