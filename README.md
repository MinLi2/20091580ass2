# Assignment 2 - Web API.
Min Li

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - Integrate movie, moviedetail, upcoming, nowplaying, actor, actordetail  with React
 + Feature 2 - use get/get id operation in actor
 + Feature 3 - use get/get id operation in actordetail
 + Feature 4 - use get/get id operation in moviedetail
 + Feature 5 - use get/get id, get reviews, post, put id, delete operation in actordetail
 + Feature 6 - use get/get id, getreviews, put id, delete id operation in nowplaying
 + Feature 7 - use get/get id, getreviews, put id, delete id operation in upcoming
 + Feature 8 - use get, post, put id, post favourites, get favourites operation in users
## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 


npm install -g swagger
npm install openapi-types

```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=MyMongoURL
seedDb=true
secret=MyJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/users/get all users|register users| N/A | N/A
| /api/users/{personid}| N/A| update a user| N/A | N/A
| /api/users/:userName/favourites|get the favourite list| N/A|add to favourite list| N/A
| /api/actors|get a list of actors| N/A | N/A | N/A
| /api/actors/{personid}|get an actor| N/A | N/A | N/A
| /api/nowplaying|get a list of nowplaying movie|N/A|N/A|N/A
| /api/nowplaying/{movieid}|get nowplaying movie|N/A|update nowplaying movie|delete noplaying movie
| /api/nowplaying/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcoming|get a list of upcoming movie|N/A|N/A|N/A
| /api/upcoming/{movieid}|get upcoming movie|N/A|update upcoming movie|delete upcoming movie
| /api/upcoming/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).
[Swaggerhub](https://app.swaggerhub.com/apis/MinLi2/MinLi2/1.0.0#/movies/updateRating)

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Authorization': window.localStorage.getItem('token') 
    },
  method:'get',
    }
    ).then(res => res.json());
    
};
  
   export const getMovie = id => {
    return fetch(`/api/movie/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
    export const  getUpcomingMovie = () => {
    return fetch(
      '/api/upcoming',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
    export const getNowPlayingMovie = () => {
    return fetch(
      '/api/nowplaying',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
 export const getPeople = () => {
    return fetch(
      '/api/actors',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  export const getPeopleDetails = id => {
    return fetch(`/api/actordetails/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
~~~

## Extra features

Using swagger to build and test APIs

## Independent learning.

Using swagger to build and test APIs