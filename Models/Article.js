const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: String,
	date: {
		type: Date,
		default: Date.now
	},
	url: String
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;

