import express from "express";
import { createBook, getBooks } from "../controllers/book.js";

const router = express.Router();

router.post("/new", createBook)
router.get("/get", getBooks)


export default router