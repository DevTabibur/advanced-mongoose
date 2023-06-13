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


    // following Step3
    const User = model<IUser>('User', userSchema);

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