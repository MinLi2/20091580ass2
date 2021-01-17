import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import onemovieModel from '../api/moviedetail/moviedetailModel';
import actorModel from '../api/actors/actorModel';
import nowplayingModel from '../api/nowplaying/nowplayingModel';
import upcomingModel from '../api/upcoming/upcomingModel'
import actordetailModel from '../api/actordetail/actordetailModel';
import topratedModel from '../api/toprated/topratedModel';
//import {movies} from './movies.js';
import {getMovie} from '../api/tmdb-api';
import {getMovies} from '../api/tmdb-api';
import {getPeople} from '../api/tmdb-api';
import {getNowPlayingMovie} from '../api/tmdb-api';
import {getUpcomingMovie} from '../api/tmdb-api';
import {getTopRatedMovie} from '../api/tmdb-api';
import {getActor} from '../api/tmdb-api';
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
  console.log('load Movies');
  try {
    getMovies().then(async res => {
      await movieModel.deleteMany();
      await onemovieModel.deleteMany();
      await movieModel.collection.insertMany(res);
      console.info(`${res.length} Movies successfully stored.`);
      res.map(async (movie)=>{
        await getMovie(movie.id).then(async (res)=>{
          await onemovieModel.collection.insertOne(res,(err)=>{if(err) console.log(err);})
        }
        )
      })
    })
  } catch (err) {
    console.error(`failed to Load movies Data: ${err}`);
  }
}
// export async function loadMovies() {
//   console.log('load Movies');
//   try {
//     getMovies().then(async res => {
//       await movieModel.deleteMany();
//       await onemovieModel.deleteMany();
//       await movieModel.collection.insertMany(res);
//       console.info(`${res.length} Movies successfully stored.`);
//       res.map(async (movie)=>{
//         await getMovie(movie.id).then(async (res)=>{
//           await onemovieModel.collection.insertOne(res,(err)=>{if(err) console.log(err);})
//         }
//         )
//       })
//     })
//   } catch (err) {
//     console.error(`failed to Load movies Data: ${err}`);
//   }
// }

export async function loadActors() {
  console.log('load actors');
  try {
    getPeople().then(async res => {
      await actorModel.deleteMany();
      await actordetailModel.deleteMany();
      await actorModel.collection.insertMany(res);
      console.info(`${res.length} actors successfully stored.`);
      res.map(async (actor)=>{
        await getActor(actor.id).then(async (res)=>{
          await actordetailModel.collection.insertOne(res,(err)=>{if(err) console.log(err);})
        }
        )
      })
    })
  } catch (err) {
    console.error(`failed to Load actors Data: ${err}`);
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


export async function loadUpcomingMovies() {
  console.log('load nowplaying movies');
  try {
    getUpcomingMovie().then(async UpcomingMovies =>{
    await upcomingModel.deleteMany();
    await  upcomingModel.collection.insertMany(UpcomingMovies);
    console.info(`${UpcomingMovies.length} Upcoming Movies were successfully stored.`);4
  })
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  
}
}

export async function loadTopratedMovies() {
  console.log('load nowplaying movies');
  try {
    getTopRatedMovie().then(async TopratedMovies =>{
    await topratedModel.deleteMany();
    await  topratedModel.collection.insertMany(TopratedMovies);
    console.info(`${TopratedMovies.length} Toprated Movies were successfully stored.`);4
  })
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  
}
}