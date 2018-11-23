import App from './App';

const port = process.env.PORT || 3030,
      app = new App().app;

app.listen(port);
