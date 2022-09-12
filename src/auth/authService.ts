import dotenv from "dotenv"
import { PasswordResetModel } from "../auth/authModel";;

dotenv.config();

interface PasswordResetData {
    token: string;
    UserId: number;
}

const addToken = async ({ token, UserId }: PasswordResetData) => {
    const expiresAfter =  process.env.RESET_TOKEN_EXPIRE_TIME as string;

    return await PasswordResetModel.create({
        token,
        UserId,
        expiresAfter
    });
}

const findToken =  async ({ token, UserId }: PasswordResetData) => {
    return await PasswordResetModel.findOne({
        where: {
            token,
            UserId
        }
    })
}




export {
    addToken,
    findToken
};