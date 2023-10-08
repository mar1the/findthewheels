import express from "express";
import Car from "../models/Car.js";
import { createError } from "../utils/error.js";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../controllers/car.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE 
router.post("/", verifyAdmin, createCar); 
//UPDATE
router.put("/:id", verifyAdmin, updateCar )
//DELETE
router.delete("/:id", verifyAdmin, deleteCar )
//GET 
router.get("/:id", getCar )
//GET ALL
router.get("/", getCars)

export default router