import mongoose from 'mongoose';
import app from './app';
// getting-started.js
const port: number = 5000



// database connection
async function dbConnected() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection is successful`);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    } catch (error) {
        console.log(`Failed to connect database`, error);
    }

}

dbConnected()



