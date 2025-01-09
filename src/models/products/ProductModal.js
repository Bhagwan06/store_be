import ProductSchema from "./ProductSchema.js";
export const addProduct = (obj) => {
  return ProductSchema(obj).save();
};

export const readProduct = (id) => {
  return ProductSchema.findById(id);
};
