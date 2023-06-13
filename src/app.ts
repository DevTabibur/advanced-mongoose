import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
const app: Application = express()


// middleware

app.use(cors())  // -> using cors
app.use(express.json())  // -> parse data
app.use(express.urlencoded({ extended: true }))    // -> parse data


app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // inserting a test data into mongodb

    /*
    Step1: Interface
    Step2: Schema
    Step3: Model
    Step4: Database on Model Query
    */

    //following step1
    


    

    const createUserToDB = async () => {
        // create instance for new user from interface
        const user = new User(
            {
                id: '1234',
                role: "student",
                password: '1223',
                name: {
                    firstName: "MR. X",
                    middleName: "Rahman",
                    lastName: "Topu",
                },
                dob: "18-4-2000",
                gender: "male",
                email: "tobiburrohman2@gmail.com",
                contactNo: "01307588223",
                emergencyContactNo: "01739651860",
                presentAddress: "Badhilki",
                permanentAddress: "Toluigacha",
            }
        )

        await user.save();
        res.send({user})
    }

    createUserToDB()

})

export default app;