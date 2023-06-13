import User from "./user.model";

export const createUserToDB = async () => {
    // create instance for new user from interface
    const user = new User(
        {
            id: '564',
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
    // must use return keyword
    return user;
}