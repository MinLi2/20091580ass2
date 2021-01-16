import express from 'express';
import { getMovieReviews } from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  if (movieModel.findByMovieDBId(id)) {
    movieModel.findByMovieDBId(id)
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

router.post('/',async (req, res, next)=> {
let newMovie = req.body;
if(newMovie && newMovie.title) {
  !newMovie.id ? newMovie.id = Math.round(Math.random() * 10000) : newMovie;
  await movieModel.create(newMovie).catch(next);
  res.status(201).send(newMovie);
}else {
  res.status(405).send({
   status:405,
   message: "Please iinclude a title."
  })
}
})

router.delete('/:id', async (req, res) => {
   const key = parseInt(req.params.id);
   const movie = await movieModel.findBYMovieDBId(key);
   if(!movie) {
     res.status(404).send({message:`Uable to find movie with id: ${key}.` ,status: 404});

   }else{
await movieModel.deleteone({"id":key});
res.status(200).send({message: `Deleted movie id: ${key}. `, status:200});
   }

});
export default router;