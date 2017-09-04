import express from "express";
import mongoose from "mongoose";
import TruckRoutes from "./routes/TruckRoutes";
import bodyParser from "body-parser";

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/truckster");

app.use(bodyParser.json());
app.use(TruckRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
