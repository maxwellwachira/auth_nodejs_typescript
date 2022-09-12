import { Request, Response } from 'express';
import argon2 from "argon2";

import {
    addUser,
    editUser,
    findUserByEmail,
    findUserById,
} from './userService';


const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        //check if user exists
        const user = await findUserByEmail(email);
        if (user) return res.status(400).json({message: "user already exists"});
        //add user if user does not exist
        //hash password
        const hashedPassword = await argon2.hash(password);
        const record  = await addUser({firstName, lastName, email, password: hashedPassword });
        return res.status(201).json({record, message:"success"});
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}

const getOneUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await findUserById(Number(id));
        if (!user) return res.status(404).json({message: `user with id = ${id} does not exists`});
        return res.json(user);
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}

const updateUser =  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await findUserById(Number(id));
        if (!user) return res.status(404).json({message: `user with id = ${id} does not exists`});
    
        //To be implemented
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }

}

const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await findUserById(Number(id));
        if (!user) return res.status(404).json({message: `user with id = ${id} does not exists`});

        await user.destroy();
        return res.json({message: "success"});
    } catch (error) {
        return res.status(500).json({message:"error", error});
    }
}


export {
    createUser,
    getOneUser,
    removeUser,
    updateUser
};