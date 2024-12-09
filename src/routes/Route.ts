import { Router, Request, Response } from "express";
import AuthRouter from "./AuthRoute";

const router = Router();

// Auth route
router.use("/auth", AuthRouter);

export default router;
