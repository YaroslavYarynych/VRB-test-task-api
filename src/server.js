import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { articleRouter } from './routes/articles.route.js';

dotenv.config();

function createServer() {
  const app = express();

  app.use(
    cors({
      origin: [
        'https://yaroslavyarynych.github.io',
        'http://localhost:3573/VRB-react-tech-task/',
        'http://localhost:5173',
        'https://yaroslavyarynych.github.io/VRB-react-tech-task/',
      ],
    }),
  );

  app.use('/articles', express.json(), articleRouter);

  return app;
}

createServer().listen(process.env.PORT, () => {
  console.log(
    `🔥🚀🚀🚀 Server is running on http://localhost${process.env.PORT} 🔥🚀🚀🚀`,
  );
});
