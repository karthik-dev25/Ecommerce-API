import { Request, Response } from "express";

const AuthRouter = (req: Request, res: Response) => {
  res.send("Auth Router Successfully Connected");
};

export default AuthRouter;
