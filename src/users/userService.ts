import { UserModel } from "../users/userModel";

interface UserRegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const addUser = async ({firstName, lastName, email, password}: UserRegistrationData) => {
    const active = false;
    const disabled =  false;
    return await UserModel.create({
        firstName,
        lastName,
        email,
        password,
        active,
        disabled
    });
}

const findUserById = async (id: number) => {
    return await UserModel.findOne({
        where: {
            id,
            disabled: false
        }
    });
}

const findUserByEmail = async (email: string) => {
    return await UserModel.findOne({
        where: {
            email,
            disabled: false
        }
    });
}

const editUser = async () => {

}


export {
    addUser,
    editUser,
    findUserByEmail,
    findUserById,
};