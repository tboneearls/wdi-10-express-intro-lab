//Greetings App
const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
	res.send("Hello stranger")
});

app.get('/greeting/:name', (req, res) => {
	res.send("Hello there " + req.params.name + "!");
});


// Tip App
app.get('/tip', (req, res) => {
	res.send("Hello")
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
	res.send(`${req.params.tipPercentage * req.params.total / 100}`);
	// res.send((req.params.tipPercentage / 100) * req.params.total);
})

app.listen(2000, () => {
	"listening 2000..."
})