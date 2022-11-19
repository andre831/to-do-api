import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/', require('./route/todoRoutes'));

app.use((req, res, next) => {
  res.status(404);

  return res.json({
    success: false,
    payload: null,
    message: 'No Loaded'
  });
});

app.listen(3000, () =>
  console.log(`REST API server ready at: http://localhost:${PORT}`)
);
