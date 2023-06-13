const express = require('express')
const colors = require("colors");
const app = express()
// getting-started.js
const mongoose = require('mongoose');
const port = 5000

// database connection
async function dbConnected() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection is successful`);

    } catch (error) {
        console.log(`Failed to connect database`, error);
    }

}

dbConnected()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})