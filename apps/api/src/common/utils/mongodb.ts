import mongoose from "mongoose";
import { mongoURL } from "../config";

mongoose
    .connect(mongoURL)
    .then(() => console.log('MongoDB is connected and running'))
    .catch((err) => console.log('MongoDB error: ' + err))