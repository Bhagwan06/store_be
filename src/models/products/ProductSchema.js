import mongoose, { Types } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String, // Fixed the syntax
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    stock: {
      type: Number,
      required: true,
    },
    images: {
      type: [String], // an array to allow multiple images
      required: true,
    },
    user:{
      type:Types.ObjectId,
      ref:"User",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);