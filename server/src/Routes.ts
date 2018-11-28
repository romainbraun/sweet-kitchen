import { Application, Request, Response } from 'express';
import path from 'path';
import FileUpload from './FileUpload';
import RecipeController from './Recipes/Recipe.controller';

export default class Routes {
  private recipeController: RecipeController = new RecipeController();
  private fileUpload: FileUpload = new FileUpload();

  public routes(app: Application): void {
    // API
    app.get('/api/recipes', this.recipeController.getAllRecipes);
    app.get('/api/recipes/:id', this.recipeController.getRecipe);

    app.post('/api/recipes', this.recipeController.saveRecipe);

    app.post('/api/upload/', this.fileUpload.getUploadFunction, (req, res, next) => {
      res.send('Successfully uploaded ' + req.files.length + ' files!');
    });

    // APP
    app.get('/*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
    });
  }
}
