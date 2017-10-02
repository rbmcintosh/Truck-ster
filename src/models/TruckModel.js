import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  website: {
    required: true,
    type: String
  },
  latitude: {
    required: true,
    type: String
  },
  longitude: {
    required: true,
    type: String
  },
  color: {
    required: true,
    type: String
  },
  image: {
    required: false,
    type: String
  }
});

const TruckModel = mongoose.model("Truck", schema);
export default TruckModel;