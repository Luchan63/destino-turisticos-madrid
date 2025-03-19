import express from "express";
import { CategoryController } from "../controller/category.js";

export const RouterCategory = ({ category }) => {
  const router = express.Router();
  const categoryController = new CategoryController({ category });

  router.get("/", categoryController.getAllCategories);
  router.get("/:id", categoryController.getCategoryById);
  router.post("/", categoryController.createCategory);
  router.patch("/:id", categoryController.updateCategory);
  router.delete("/:id", categoryController.deleteCategory);
  return router;
};
