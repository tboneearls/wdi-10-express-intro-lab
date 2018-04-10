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
	res.send("Hello there " + req.params.name + "!");

	// console.log(req.params.name);
});

app.listen(2000, () => {
	"listening 2000..."
})