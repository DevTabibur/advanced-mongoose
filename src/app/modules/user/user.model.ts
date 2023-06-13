import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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

export default User;