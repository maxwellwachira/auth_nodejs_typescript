import express, { Application } from "express";
import dotenv from "dotenv";

//DataBase
import { dbAuthenticate } from "./src/config/dbconfig";
//auth routes
import authRoutes from "./src/auth/authRoutes";
//user routes
import userRoutes from "./src/users/userRoutes";


dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    dbAuthenticate();
});