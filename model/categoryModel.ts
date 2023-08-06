import mongoose from "mongoose";
import { iCategoryData } from "../config/interface";

const categoryModel = new mongoose.Schema({
  name:{
    type : String
  } 
});

export default mongoose.model<iCategoryData>("Category", categoryModel);