import CategorySchema from "./CategorySchema.js";

export const addCategory = (obj) => {

  return CategorySchema(obj).save();
};

export const readCategory = (id) => {
  return CategorySchema.findById(id);
};
