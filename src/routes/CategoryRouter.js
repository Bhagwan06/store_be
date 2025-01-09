import express from "express";
import { insertCategory } from "../controllers/CategoryController.js";
export const CategoryRoute = express.Router();

CategoryRoute.post("/register", insertCategory);