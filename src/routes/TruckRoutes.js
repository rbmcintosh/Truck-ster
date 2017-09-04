import express from "express";
import {list, create, remove} from "../controllers/TruckController";

const router = express.Router();

router.get("/trucks", list);
router.post("/trucks", create);
router.delete("/trucks/:id", remove);

export default router;