//requires

require("dotenv").config();

var request = require("request");

// Add the code required to import the keys.js file and store it in a variable. ?????

// variables

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var command = process.argv[2];
var name = process.argv[3];

//IF ELSE // SWITCH STATEMENTS

// Make it so liri.js can take in one of the following commands:

// node liri.js my-tweets
if (command === "my-tweets") {

    myTweets();
}

// node liri.js spotify-this-song '<song name here>'

else if (command === "spotify-this-song") {

    spotifyThisSong();
}

// node liri.js movie-this '<movie name here>'

else if (command === "movie-this") {

    movieThis(name);
}

// node liri.js do-what-it-says

else if (command === "do-what-it-says") {

    doWhatItSays();
}



//functions

function myTweets() {

    // This will show your last 20 tweets and when they were created at in your terminal/bash window.


}

function spotifyThisSong(song_name) {

    // This will show the following information about the song in your terminal/bash window

    // Artist(s)

    // The song's name

    // A preview link of the song from Spotify

    // The album that the song is from

    // If no song is provided then your program will default to "The Sign" by Ace of Base.

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

    // else if in case the user enters anything that doesn't resemble an actual movie/show -- UNRESOLVED

    else if (response === "") {
        
        console.log("That's not a movie, silly!");
    }

  });

    //if the user doesn't type in a movie, maybe put in a gif or something?

}

function doWhatItSays() {

    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

    // Feel free to change the text in that document to test out the feature for other commands.

}