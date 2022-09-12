import express from 'express';

import userValidator from './userValidator';
import { validationMiddleware } from '../middleware/validationMiddleware';
import {
    createUser,
    getOneUser,
    removeUser,
    updateUser
} from './userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

//create user
router.post('/', userValidator.checkCreateUser(),  validationMiddleware, createUser);
//get one user
router.get('/:id', authMiddleware, userValidator.checkIdParam(), validationMiddleware, getOneUser);
//update user
router.put('/:id', userValidator.checkIdParam(), validationMiddleware, updateUser);
//delete user
router.delete('/:id', userValidator.checkIdParam(), validationMiddleware, removeUser);

export default router;