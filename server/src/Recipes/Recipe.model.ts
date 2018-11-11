import mongoose from 'mongoose';

export interface IRecipeModel extends mongoose.Document {
  title: string;
  createdAt: Date;
  content: string;
  keywords: string;
}

export const RecipeSchema = new mongoose.Schema({
  content: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  keywords: {type: String},
  title: {type: String, required: true},
});

export default mongoose.model<IRecipeModel>('Recipe', RecipeSchema);
