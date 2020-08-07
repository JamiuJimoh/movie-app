<<<<<<< HEAD
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
	const getMovie = async () => {
		try {
			const response = await axios.get('http://www.omdbapi.com/', {
				params: {
					apikey: 'thewdb',
					i: `${query}`,
					plot: 'full'
				}
			});
			res.render('show', { movie: response.data });
		} catch (err) {
			res.send(err.message);
		}
	};
	getMovie();
});

const port = process.env.PORT || 3000;
const ip = process.env.IP || '0.0.0.0';
app.listen(port, ip);
=======
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

app.listen(3000, function() {
	console.log('Movie App has started');
});
>>>>>>> 75beaa211e1e79f38a4ce34e53b4390639821423
