import express from "express";
import { fetchArticlesByCategories, Categorize } from "../controller/CategoryController";

const router = express.Router();

router.route("/:articleID/:category/category").post(Categorize);
router.route("/:articleID/:category/fetch").post(fetchArticlesByCategories);

export default router;
