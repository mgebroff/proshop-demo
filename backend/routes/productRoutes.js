/******************* IMPORT ************************************************/
import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";
/******************* EXPRESS ROUTER ****************************************/
const router = express.Router();

/******************* ROUTES ************************************************/

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProduct);

/******************* EXPORT ************************************************/
export default router;
