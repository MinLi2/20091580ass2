import express from 'express';
import { getMovieReviews } from '../tmdb-api';
import nowplayingModel from './nowplayingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    nowplayingModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  if (nowplayingModel.findByMovieDBId(id)) {
    nowplayingModel.findByMovieDBId(id)
      .then(movie => res.status(200).send(movie))
      .catch((error) => next(error));
  } else {
    res.status(404).catch((error) => next(error));
  }
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;