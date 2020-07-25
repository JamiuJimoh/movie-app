const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// INDEX
app.get('/', function(req, res) {
	res.render('index');
});

// FIND MOVIE ROUTE
app.get('/movies', function(req, res) {
	const query = req.query.search;
	const url = `http://www.omdbapi.com/?apikey=thewdb&s=${query}`;
	const getMovies = async (url) => {
		try {
			const response = await axios.get(url);
			res.render('movies', { movies: response.data });
		} catch (error) {
			res.send(error.message);
		}
	};
	getMovies(url);
});

// SHOW ROUTE
app.get('/movies/:id', function(req, res) {
	const query = req.params.id;
	const url = `http://www.omdbapi.com/?apikey=thewdb&i=${query}&plot=full`;
	const getMovie = async (url) => {
		try {
			const response = await axios.get(url);
			res.render('show', { movie: response.data });
		} catch (err) {
			res.send(err.message);
		}
	};
	getMovie(url);
});

app.listen(process.env.PORT || 5000);
