//requires

require("dotenv").config();

var request = require("request");

var Spotify = require("node-spotify-api");

var Twitter = require("twitter");

var keys = require("./keys.js");


// variables

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var command = process.argv[2];
var name = process.argv[3];

// IF / ELSE STATEMENTS


if (command === "my-tweets") {

    //?? haven't verified if argument is correct??

    myTweets(name);
}


else if (command === "spotify-this-song") {

    spotifyThisSong(name);

}

else if (command === "movie-this") {

    movieThis(name);
}

else if (command === "do-what-it-says") {

    doWhatItSays();
}



//functions

function myTweets() {

    // This will show your last 20 tweets and when they were created at in your terminal/bash window.

    var params = {screen_name: 'kitesurf'};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error) {

            console.log(tweets);

            //show tweets with spaces
            console.log(JSON.stringify(tweets, null, 4));
        }
    });
    // NOT FINISHED

}

function spotifyThisSong(song_name) {

    spotify.search({ type: 'track', query: song_name }, function(err, data) {

        if (err) {

          console.log("Error occurred: " + err);

          // If no song is provided then your program will default to "The Sign" by Ace of Base.

        }

        else {

            console.log("Found your song! :P ");

            var songInfo = data.tracks.items[0];
            
            console.log("Artist: " + songInfo.artists[0].name);
            console.log("Song: " + "'" + songInfo.name + "'");
            console.log("Album: " + songInfo.album.name);
            console.log("Preview URL: " + songInfo.external_urls.spotify);
  
        }

        //NOT FINISHED

    });

}

function movieThis(movie_name) {
    

    // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
  
      console.log("Title: " + JSON.parse(response.body).Title);
      console.log("Year Released: " + JSON.parse(response.body).Year);
      console.log("IMDB Rating: " + JSON.parse(response.body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(response.body).Ratings[1].Value);
      console.log("Made In: " + JSON.parse(response.body).Country);
      console.log("Avaiable Languages: " + JSON.parse(response.body).Language);
      console.log("Synopsis: " + JSON.parse(response.body).Plot);
      console.log("Actors: " + JSON.parse(response.body).Actors);

    }

    // in case the user enters anything that doesn't resemble an actual movie/show -- UNRESOLVED

    else {

        //below probably won't work -- think of something similar -- layout good

        movie_name = "Gangs Of New York";
        
        console.log("Well, that didn't work..");
        console.log("\nbut here's a movie I highly recommend :)" );
        console.log("==========================================");

        console.log("Title: " + JSON.parse(response.body).Title);
        console.log("Year Released: " + JSON.parse(response.body).Year);
        console.log("IMDB Rating: " + JSON.parse(response.body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(response.body).Ratings[1].Value);
        console.log("Made In: " + JSON.parse(response.body).Country);
        console.log("Avaiable Languages: " + JSON.parse(response.body).Language);
        console.log("Synopsis: " + JSON.parse(response.body).Plot);
        console.log("Actors: " + JSON.parse(response.body).Actors);
        
    }

  });

  // NOT FINISHED -- JUST NEED TO FINISH ERROR PROCEDURE

}

function doWhatItSays() {

    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

    // Feel free to change the text in that document to test out the feature for other commands.

}