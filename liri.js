//requires

require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable. ?????

// variables

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

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

    movieThis();
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

    //use 'trilogy' key for OMDB API

    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.

    //if the user doesn't type in a movie, maybe put in a gif or something?

}

function doWhatItSays() {

    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

    // Feel free to change the text in that document to test out the feature for other commands.

}