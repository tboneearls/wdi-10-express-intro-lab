//Greetings App
const express = require('express');
const app = express();

// app.get('/greeting/:name', (req, res) => {
// 	res.send({params: req.params, queries: req.query})
// });

app.get('/greeting', (req, res) => {
	res.send("Hello stranger")
});

app.get('/greeting/:name', (req, res) => {
	res.send(greeting[req.params.name]);
	console.log("hey");
	console.log(req.params.index);
});

app.listen(2000, () => {
	"listening 2000..."
})