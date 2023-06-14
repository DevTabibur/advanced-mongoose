import { IUser } from "./user.interface";
import User from "./user.model";


export const getUserServices = async (): Promise<IUser[]> => {
    const users = await User.find();
    // return keyword is must needed
    return users;
}

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // create instance for new user from interface
    const user = new User(payload)
    await user.save();
    // must use return keyword
    return user;
}

export const getAUserByID = async (payload: string): Promise<IUser | null> => {
    console.log('payload', { id: payload });
    const user = await User.findOne({ id: payload }, { name: 1 ,contactNo: 1 })
    return user;
}