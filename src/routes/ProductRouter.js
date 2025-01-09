import express from "express";
import { insertProduct } from "../controllers/ProductController.js";

export const ProductRoute = express.Router();

//User registration 
ProductRoute.post("/register", insertProduct);