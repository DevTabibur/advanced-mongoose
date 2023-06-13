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
    Step4: Database Query
    */

    //following step1
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        dob?: string;
        gender: 'male' | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }


    // following Step2
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dob: { type: String },
        gender: {
            type: String,
            enum: ["male", "female"]
        },
        email: { type: String },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },

    });



    // res.send('Hello World!');
    // next()
})

export default app;