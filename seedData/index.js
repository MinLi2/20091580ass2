import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import actorModel from '../api/actors/actorModel';
import nowplayingModel from '../api/nowplaying/nowplayingModel';
import {movies} from './movies.js';
import {getPeople} from '../api/tmdb-api';
import {getNowPlayingMovie} from '../api/tmdb-api';
const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadActor() {
  console.log('load actors');
  try {
  getPeople().then(async res =>{
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(res);
    console.info(`${res.length} actor were successfully stored.`);
    
  })
 } catch (err) {
    console.error(`failed to Load actor Data: ${err}`);
  }
}

export async function loadNowplayingMovies() {
  console.log('load nowplaying movies');
  try {
    getNowPlayingMovie().then(async NowplayingMovies =>{
    await nowplayingModel.deleteMany();
    await nowplayingModel.collection.insertMany(NowplayingMovies);
    console.info(`${NowplayingMovies.length} Nowplaying Movies were successfully stored.`);4
  })
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  
}
}
