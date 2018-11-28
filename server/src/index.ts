import dotenv from 'dotenv';
import App from './App';

dotenv.config();

const port = process.env.PORT || 3030,
      app = new App().app;

app.listen(port);
