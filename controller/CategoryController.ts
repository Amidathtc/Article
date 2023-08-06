import mongoose from "mongoose";
import articleModel from "../model/articleModel";
import authorModel from "../model/authorModel";
import { Request, Response } from "express";

export const fetchArticlesByCategories = async (req: any, res: Response) => {
    try {
      const { authorID } = req.params;
  
      const author = await authorModel.findById(authorID).populate("categories");
      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }
  
  
      const categoryIDs = author!.category!.map((category) => category);
  
      const articles = await articleModel
        .find({ category: {  categoryIDs } })
        .populate("author");
  
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };

  export const Categorize = async (req: Request, res: Response) => {
    try {
      const { categoryID, articleID } = req.params;
  
      const category: any = await authorModel.findById(categoryID);
      const article : any = await authorModel.findById(articleID);
  
      if (category && article) {
        await article.category?.push(new mongoose.Types.ObjectId(articleID!));
        article.save();
        await category.categories?.push(new mongoose.Types.ObjectId(categoryID!));
    category.save();
  
        return res.status(201).json({
          message: "you have added a category",
        });
      } else {
        return res.status(404).json({
          message: "Something went wrong",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error creating category",
      });
    }
  };

