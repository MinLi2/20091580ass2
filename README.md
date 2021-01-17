# Assignment 2 - Agile Software Practice.
Min Li
## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Put /api/movies/:id - update a specific movie. The request payload includes the some/all of the following movie properties to be updated: title, genre list, release date.
+ Post /api/movies - add a new movie to the database.
+ Delete /api/movies - delete the movie in the database.
+ Get /api/movie - return an array of movie details.
+ Get /api/upcoming - return an array of upcoming movies.
+ Post /api/upcoming - add a new upcoming movie to the database.
+ Put /api/upcoming/:id - update a specific upcoming movie.
+ Delete /api/upcoming - delete the upcoming movie in the database.
+ Get /api/nowplaying - return an array of nowplaying movies.
+ Post /api/nowplaying - add a new nowplaying movie to the database.
+ Put /api/nowplaying/:id -  update a specific nowplaying movie.
+ Delete /api/nowplaying - delete the nowplaying movie in the database.
+ Get /api/actors - return an array of actors.
+ Get /api/actors/:id - return an array of actor details.
+ Get /api/users - return all users.
+ Post /api/users - Register and authenticate a user.
+ Put /api/users/:id - Update a user.
+ Post /api/users/userName/favourites - add a favourite handling.
+ Get /api/users/userName/favourites - get the faourite handing information.

## Error/Exception Testing.

.... From the list of endpoints above, specify those that have error/exceptional test cases in your test code, the relevant test file and the nature of the test case(s), e.g.

+ Post /api/movies - test when the new movie has no title, invalid release date, empty genre list. Test adding a movie without prior authentication. See tests/functional/api/movies/index.js 
+ get /api/movies/:id - test when enter invalid movies id
+ delete /api/moives/:id - test delete movie when enter a wrong id
+ get /api/upcoming/:id - test when enter invalid upcoming movies id
+ delete /api/upcoming/:id - test delete movie when enter a wrong id
+ get /api/nowplaying/:id - test when enter invalid nowplaying movies id
## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://movies-api-staging222.herokuapp.com/ Staging deployment
+ https://movie-staging3.herokuapp.com/ - Production

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 
![][production]



[If an alternative platform to Heroku was used then show the relevant page from that platform's UI.]

## Feature Flags (If relevant)

... Specify the feature(s) in your web API that is/are controlled by a feature flag(s). Mention the source code files that contain the Optimizerly code that implement the flags. Show screenshots (with appropriate captions) from your Optimizely account that prove you successfully configured the flags.


[stagingapp]: ./img/stagingapp.png
[production]: ./img/production.png
