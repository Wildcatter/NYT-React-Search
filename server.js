var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Article = require("./Models/Article");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect('mongodb://localhost/nytreact');

mongoose.connection
	.on("error", function(err){
		console.log("Mongoose Error: ", err);
	});
	.once("open", function() {
		console.log("Mongoose connection success bruh.");
	});

/* You'll need several Express routes for your app:

		* `/` - will load your single HTML page (with ReactJS) in public/index.html

		* `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

		* `/api/saved` (post) - your components will use this to save an article to the database

		* `/api/saved` (delete) - your components will use this to delete a saved article in the database
*/

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.get('/api/saved', function(req, res) {
	Article.find().sort
});
