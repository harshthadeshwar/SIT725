const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid numbers provided');
    } else {
        const result = num1 + num2;
        res.send(`The result is ${result}`);
    }
});


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
