import express from 'express';
import * as articlesControllers from '../controllers/articles.controller.js';

export const articleRouter = express.Router();

articleRouter.get('/', articlesControllers.getAllArticles);
articleRouter.get('/:page', articlesControllers.getMoreArticles);
