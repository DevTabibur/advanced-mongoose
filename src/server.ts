import mongoose from 'mongoose';
import colors from "colors";
import app from './app';
// getting-started.js
const port: number = 5000



// database connection
async function dbConnected() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(colors.green.underline(`Database connection is successful`));
        app.listen(port, () => {
            console.log(colors.rainbow(`Server is listening on port ${port}`))
        })

    } catch (error) {
        console.log(`Failed to connect database`, error);
    }

}

dbConnected()



