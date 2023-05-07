const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
console.log(process.env);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const router = require("./routes/tasks");

app.use("/api", router);

app.listen(process.env.PORT | 5000, () => {
    console.log(process.env.MONGO_URL);
    
    console.log("Server on port", process.env.PORT | 5000);
})
mongoose.set("strictQuery",false);
mongoose.connect(process.env.MONGO_URL, {}).then(() => {
    console.log("DB connected");
}).catch(err => console.error(err))