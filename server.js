// Greetings App
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

// Magic 8 Ball App

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
	res.send(req.params.question + "? The Magic 8 Ball says: " + responses[Math.floor(Math.random() * responses.length)]);
})



// Fibonacci
function checkFibonacci (num) {
    if (Number.isInteger(Math.sqrt((5*(num*num)-4))) || Number.isInteger(Math.sqrt(5*(num*num)+4))) {
    	return true;
    } else { 
    	return false; 
    }
}

// app.get('/fibonacci/:number', (req, res) => {
// 	if (checkFibonacci(req.params.number) === true) {
// 		res.send("Sweet number")
// 	} else {
// 		res.send("This isn't a Fibonacci number.")
// 	}
// })

// Fibonacci extended
function genFibonacciNum (index) {
	if (index === 0 || index === 1) {
		return 1;
	}
	const arr = [1, 1];
	for (let i = 2; i <= index; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[index].toString();
}

app.get('/fibonacci/:index', (req, res) => {
	res.send(genFibonacciNum(req.params.index));
})

app.listen(2000, () => {
	"listening 2000..."
})