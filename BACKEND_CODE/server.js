require('dotenv').config()

const port = 5000;
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const data_service = require("./data_service.js");
const fs = require("fs");

data_service.initialize()
	.then(() => {
		app.listen(port, () => {
			console.log("express server listening on port " + port);
		});
	})
	.catch(() => {
		console.log("error start data service");
	});

app.use(express.static(path.join(__dirname, 'files')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
	// res.setHeader('Access-Control-Allow-Degrees', true);
	next();
});

app.use('/static', express.static(path.join(__dirname, '/assets')));

app.get('/api/education/getDegrees', (req, res) => {
	data_service.getDegrees().then((results) => {
		res.send(JSON.parse(results));
	}).catch((err) => {
		res.status(500).send(err);
	});
});

app.get('/api/education/getSchoolByID', (req, res) => {
	data_service.getSchoolByID(req.query.id)
		.then((results) => { res.send(JSON.parse(results)); })
		.catch((err) => { res.status(500).send(err); });
});

app.get('/api/education/getCoursesByDegree', (req, res) => {
	data_service.getCoursesByDegree(req.query.id)
		.then((results) => { res.send(JSON.parse(results)); })
		.catch((err) => { res.status(500).send(err); });
});

app.get('/api/expertise/getSkillCategories', (req, res) => {
	data_service.getSkillCategory()
		.then((results) => {
			res.send(JSON.parse(results));
		}).catch((err) => {
			res.status(500).send(err);
		});
});

app.get('/api/expertise/getSkillsByCategory', (req, res) => {
	data_service.getSkills(req.query.id)
		.then((results) => {
			res.send(JSON.parse(results));
		}).catch((err) => {
			res.status(500).send(err);
		});
});

app.get('/api/utils/getScribble', (req, res) => {
	data_service.getScribble(req.query.id)
		.then((results) => {
			res.send(JSON.parse(results));
		}).catch((err) => {
			res.status(500).send(err);
		});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'files/index.html'));
});

