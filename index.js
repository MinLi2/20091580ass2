import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadActors, loadNowplayingMovies, loadUpcomingMovies, loadTopratedMovies} from './seedData';
import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import moviedetailRouter from './api/moviedetail';
import genresRouter from './api/genres';
import peopleRouter from './api/actors';
import peopledetailsRouter from './api/actordetail';
import nowplayingRouter from './api/nowplaying';
import upcomingRouter from './api/upcoming';
import topratedRouter from './api/toprated';
import bodyParser from 'body-parser';
import usersRouter from './api/users';
import loglevel from 'loglevel';
import swaggerUi from 'swagger-ui-express'


const specs = require('./swagger.json')


dotenv.config();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadActors();
  loadNowplayingMovies();
  loadUpcomingMovies();
  loadTopratedMovies();
}


const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};



const app = express();

const port = process.env.PORT;

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movie', moviedetailRouter);
app.use('/api/genres', genresRouter);
//Users router
app.use('/api/users', passport.authenticate('jwt', {session: false}), usersRouter);
app.use('/api/actors', peopleRouter);
app.use('/api/actordetail', peopledetailsRouter);
app.use('/api/nowplaying', nowplayingRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/toprated', passport.authenticate('jwt', {session: false}), topratedRouter);
 app.use(
   "/",
   swaggerUi.serve,
   swaggerUi.setup(specs)
 );
app.use(errHandler);



let server = app.listen(port, () => {
  loglevel.info(`Server running at ${port}`);
});

module.exports = server;