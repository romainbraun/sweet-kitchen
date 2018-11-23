import { Application, Request, Response } from 'express';
import path from 'path';
import RecipeController from './Recipes/Recipe.controller';

export default class Routes {
  private recipeController: RecipeController = new RecipeController();

  public routes(app: Application): void {
    app.get('/', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, '../../../client/dist', 'index.html'));
    });

    // API
    app.get('/api/recipes', this.recipeController.getAllRecipes);
    app.get('/api/recipes/:id', this.recipeController.getRecipe);

    app.post('/api/recipes', this.recipeController.saveRecipe);

  }
}
