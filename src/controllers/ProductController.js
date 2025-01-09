
 import { ResponseClient } from "../middlewares/ResponseClient.js";
import { addProduct} from "../models/products/ProductModal.js";


 export const insertProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, stock, image, user } = req.body;
    const product = await addProduct({
      name,
      description,
      price,
      category,
      stock,
      image,
      user,
    });
    if (product) {
      return ResponseClient({
        req,
        res,
        message: "Product added successfully",
        data: product,
      });
    }
  } catch (error) {
    next(error);
  }
};

