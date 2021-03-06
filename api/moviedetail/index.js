import express from 'express';
import onemovieModel from './moviedetailModel'
const router = express.Router();

router.get('/', (req, res, next) => {
  onemovieModel.find().then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  onemovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next).catch((error)=>next(error));
  
});

export default router;