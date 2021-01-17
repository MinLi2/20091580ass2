import express from 'express';
import { getMovieReviews } from '../tmdb-api';
import nowplayingModel from './nowplayingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    nowplayingModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   if (nowplayingModel.findByMovieDBId(id)) {
//     nowplayingModel.findByMovieDBId(id)
//       .then(movie => res.status(200).send(movie))
//       .catch((error) => next(error));
//   } else {
//     res.status(404).catch((error) => next(error));
//   }
// });
router.get('/:id', async (req, res, next)=>{
  const id = parseInt(req.params.id);
  const nowplaying = await nowplayingModel.findByMovieDBId(id);
  if(nowplaying){
  nowplayingModel.findByMovieDBId(id).then(nowplaying => res.status(200).send(nowplaying)).catch(next);
}else{
  res.status(404).send({message: `Unable to find nowplayingmovie with id: ${id}.`, status: 404});
}
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

  router.put('/:id', (req, res) => {
    const key = parseInt(req.params.id);
    const updateMovie = req.body;
    const index = moviesObject.movies.map((movie) => {
      return movie.id;
    }).indexOf(key);
    if (index !== -1) {
      !updateMovie.id ? updateMovie.id = key : updateMovie
      moviesObject.movies.splice(index, 1, updateMovie);
      res.status(200).send(updateMovie);
    } else {
      res.status(404).send({
        message: 'Unable to find Movie',
        status: 404
      });
    }
  });
  
  router.delete('/:id', async (req,res, next)=>{
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if(movie){
    movieModel.deleteOne({id: id}).then(res.status(200).send("delete successfully"))
    .catch(next);
    } 
  });
  export default router;

