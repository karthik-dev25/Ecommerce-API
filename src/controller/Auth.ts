import { Request, Response } from "express";

const Signup = (req: any, res: Response) => {
    console.log("req",req.body)
  res.send("Signup Successfully");
};

export default Signup;
