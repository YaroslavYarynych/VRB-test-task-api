import * as articleServices from '../services/articles.service.js';
// eslint-disable
export const getAllArticles = async (req, res) => {
  const allArticles = await articleServices.getAll();
  res.send(allArticles);
};

export const getMoreArticles = async (req, res) => {
  const { page } = req.params;
  const moreArticles = await articleServices.getMore(page);

  res.send(moreArticles);
};
