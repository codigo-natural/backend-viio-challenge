import mongoose from "mongoose";
import config from "./config.js";

mongoose.connect(config.urlMongoDB)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));