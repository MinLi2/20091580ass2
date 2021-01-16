import express from 'express';
import actorModel from './actorModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    actorModel.find().then(actors => res.status(200).send(actors)).catch(next);
  });

export default router;