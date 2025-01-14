import { ResponseClient } from "../middlewares/ResponseClient.js";
import { addCategory } from "../models/category/CategoryModal.js";

export const insertCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const category = await addCategory({
      name,
      description,
    });
    if (category) {
        return ResponseClient({
            req,res,message:"Category Added",
            data: category,
        });
    }
  } catch (error) {
    next(error)
  }
};
