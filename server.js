<<<<<<< HEAD
// Import the required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
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
>>>>>>> 6089ae278440ad570ae9bba09b1010a2586444fb
});
