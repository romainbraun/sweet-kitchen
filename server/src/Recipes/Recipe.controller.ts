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

  public getRecipe(req: Request, res: Response): void {
    RecipeModel.findById(req.params.id, (err, recipe) => {
      if (err) {
        res.send(err);
      } else {
        res.json(recipe);
      }
    });
  }

  public saveRecipe(req: Request, res: Response): void {
    const newRecipe = new RecipeModel(req.body);

    newRecipe.save((err, recipe) => {
      if (err) {
        res.send(err);
      } else {
        res.json(recipe);
      }
    });
  }
}
