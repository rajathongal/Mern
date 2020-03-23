require('dotenv').config(); //hides environment variables
//imports
const express = require('express');
const handle = require('./handlers')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models')

// Server Creation 
const app = express();
const port = process.env.PORT;

//Use of Middleware
app.use(cors());
app.use(bodyParser.json());

// sending / parsing the data 
app.get('/', (req, res) => res.json({ Hello: 'world' }));


// Error handling
app.use(handle.notFound);
app.use(handle.errors);


//start server
app.listen(port, console.log(`Server started on port ${port}`))