import express from 'express';
import actordetailModel from './actordetailModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    actordetailModel.find().then(actor => res.status(200).send(actor)).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    actordetailModel.findByActorDBId().then(actor => res.status(200).send(actor)).catch(next);
  });
  

export default router;