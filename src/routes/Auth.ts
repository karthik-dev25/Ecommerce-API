import express from "express";
import Signup from "../controller/Auth";

const authRouter = express.Router();

authRouter.post('/',Signup)



export default authRouter;
