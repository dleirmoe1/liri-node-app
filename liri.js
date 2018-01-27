var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = request

//load the user twitter keys

var keys = require('./keys.js');
var twitterkeys = keys.twitterkeys;

//read in command line arguments
var cmdArgs = process.argv;
//The LIRI command
var liriCommand = cmdArgs[2];

var liriArg = '';
for (var i = 3; i < cmdArgs.length; i++){
	liriArg += cmdArgs[i] + '';
}
//retrieveTweets 
function retrieveTweets(){
	fs.appendFile('./log.txt', 'User Command: node liri.js my-tweets\n\n',(err) =>{
		if (err) throw err;
	});

//initialize twitter client
var client = new Twitter(twitterkeys);
