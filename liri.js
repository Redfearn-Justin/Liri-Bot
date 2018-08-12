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

    console.log("\nHold on one second..looking for your tweets now..\n");

    myTweets();
}


else if (command === "spotify-this-song") {

    console.log("\nHold on one second..looking for your song now..\n");

    spotifyThisSong(name);

}

else if (command === "movie-this") {

    console.log("\nHold on one second..looking for your movie now..\n");

    movieThis(name);
}

else if (command === "do-what-it-says") {

    doWhatItSays();
}



//functions

function myTweets() {

    var params = {screen_name: '__FoxMcCloud_'};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error) {

            console.log("Found your tweets!" + "\n\n");

            var tweetArray = JSON.parse(response.body);

            for (var i = 0; i < tweetArray.length; i++) {

                var tweetArray2 = tweetArray[i];

                console.log("\n\n" + tweetArray2.created_at + "\n" + tweetArray2.text + "\n\n");


            }
        }

        else {

            console.log("Error occured" + error);

        }
    });

}

function spotifyThisSong(song_name) {

    spotify.search({ type: 'track', query: song_name }, function(err, data) {

        if (err) {

            console.log("Error occurred: " + err + "\n");

            songRedo();


            //NOT FINISHED -- error function not working

        }

        else {

            console.log("Found your song! :P \n");

            var songInfo = data.tracks.items[0];
            
            console.log("Artist: " + songInfo.artists[0].name + "\n");
            console.log("Song: " + "'" + songInfo.name + "'" + "\n");
            console.log("Album: " + songInfo.album.name + "\n");
            console.log("Preview URL: " + songInfo.external_urls.spotify + "\n");
  
        }

    });

}

function movieThis(movie_name) {
    


    request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response) {

        if (!error && response.statusCode === 200) {

            console.log("...and here's your movie!\n\n")
    
            console.log("Title: " + JSON.parse(response.body).Title + "\n");
            console.log("Year Released: " + JSON.parse(response.body).Year + "\n");
            console.log("IMDB Rating: " + JSON.parse(response.body).imdbRating + "\n");
            console.log("Rotten Tomatoes Rating: " + JSON.parse(response.body).Ratings[1].Value + "\n");
            console.log("Made In: " + JSON.parse(response.body).Country + "\n");
            console.log("Avaiable Languages: " + JSON.parse(response.body).Language + "\n");
            console.log("Synopsis: " + JSON.parse(response.body).Plot + "\n");
            console.log("Actors: " + JSON.parse(response.body).Actors + "\n");

        }

        else if (process.argv[3] === "''" || error) {

            console.log("That's too bad, your search didn't work :( \n");

            movieRedo();
            
        }

    });

}

function doWhatItSays() {

    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

    // Feel free to change the text in that document to test out the feature for other commands.

}


//resolution functions

function songRedo() {

    spotify.search({ type: 'track', query: "The Sign" }).then(function() {


        console.log("Error occurred: " + err + "\n");

        console.log("However, here's a song I know you'll like...\n");
        console.log("==========================================\n\n");



        console.log("Artist: " + songInfo.artists[0].name + "\n");
        console.log("Song: " + "'" + songInfo.name + "'" + "\n");
        console.log("Album: " + songInfo.album.name + "\n");
        console.log("Preview URL: " + songInfo.external_urls.spotify + "\n");

    });

}

function movieRedo() {

    console.log("Well, that didn't work..");
    console.log("\nbut here's a movie I highly recommend :)\n");
    console.log("==========================================\n\n");

    request("http://www.omdbapi.com/?t=gangs+of+new+york&y=&plot=short&apikey=trilogy").then(function() {

        console.log("Title: " + JSON.parse(response.body).Title);
        console.log("Year Released: " + JSON.parse(response.body).Year);
        console.log("IMDB Rating: " + JSON.parse(response.body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(response.body).Ratings[1].Value);
        console.log("Made In: " + JSON.parse(response.body).Country);
        console.log("Avaiable Languages: " + JSON.parse(response.body).Language);
        console.log("Synopsis: " + JSON.parse(response.body).Plot);
        console.log("Actors: " + JSON.parse(response.body).Actors);
    });
}
// Notes


//NOT FINISHED/RESOLVED - Error functions for Spotify and Movie

// show tweets with spaces
// console.log(JSON.stringify(tweets, null, 4));