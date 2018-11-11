import { Request, Response } from "express";
import RecipeModel from './Recipe.model';

export default class RecipeController {
  public getAllRecipes(req: Request, res: Response): void {
    RecipeModel.find({}, (err, recipes) => {
      if (err) {
        res.send(err);
      } else {
        res.json(recipes);
      }
    });
  }
}
