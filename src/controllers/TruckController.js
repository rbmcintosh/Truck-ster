import TruckModel from "../models/TruckModel";

export function list(req, res) {
  TruckModel.find({}).exec()
  .then(trucks => {
   return res.json(trucks);
 });
}

export function remove(req, res) {
  TruckModel.remove({_id: req.params.id})
  .then(trucks => {
   return res.send("You have deleted a truck.");
 });
}

export function create(req, res) {
  const truck = new TruckModel({
    name: req.body.name,
    description: req.body.description,
    website: req.body.website,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    color: req.body.color,
    image: req.body.image
 });
 
 truck.save()
 .then(truck => {
   return res.json(truck);
 });
}