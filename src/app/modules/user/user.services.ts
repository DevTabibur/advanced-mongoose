import { IUser } from "./user.interface";
import User from "./user.model";


export const getUserServices = async (): Promise<IUser[]> => {
    const users = await User.find();
    // return keyword is must needed
    return users;
}

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating a new User, we are using instance methods
    const user = new User(payload) // User => class user -> instance
    await user.save();
    console.log('fullName', user.fullName());
    return user;
}

export const getAUserByID = async (payload: string): Promise<IUser | null> => {
    console.log('payload', { id: payload });
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 })  // eikhane name and contactNo ke field filtering kore oi data gula passi... and tader value 1 deya mane -> it's value is true
    return user;
}


export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    console.log(admins);
    return admins;
};