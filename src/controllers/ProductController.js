export const addProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, stock, image } = req.body;
    const product = await addProduct({
      name,
      description,
      price,
      category,
      stock,
      image,
    });
    if (product) {
      return resObj({
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
