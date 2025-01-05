import Express from "express";
import authRouter from "./Auth";

const mainRouter = Express();

// Auth route
mainRouter.use("/auth", authRouter);

export default mainRouter;
