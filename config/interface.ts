import mongoose from "mongoose";

interface iRating {
  rate?: number;
  ratedBy?: string;
  article?: {};
}

interface iArticle {
  rate?: number;
  title?: string;
  content?: string;
  description?: string;
  authorID?: string;
  image?: string;
  imageID?: string;
  coverImage?: string;
  coverImageID?: string;
  ratings?: [];
  likes?: [];
  author?: {};
  category?: {};
}

interface iAuthor {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  article?: {}[];
  category?: {}[];
  friends?: string[];
  request?: string[];

  
}

interface iCategory {
  name ?: string;
}

export interface iCategoryData extends iCategory , mongoose.Document {}
export interface iAuthorData extends iAuthor, mongoose.Document {}

export interface iArticleData extends iArticle, mongoose.Document {}

export interface iRatingData extends iRating, mongoose.Document {}
