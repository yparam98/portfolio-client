const port = 5000;
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'files')));

app.get('*', (req,res) => {
	// res.send("Hello, World!");
	res.sendFile(path.join(__dirname, 'files/index.html'));
});

app.listen(port, () => {
	console.log("express server listening on port " + port);
});

