import { Router } from "express";
import { PrismaClient } from "@prisma/client";



const userRouter = Router();

const prismaCLient = new PrismaClient();

userRouter.get("/data", async(req, res) => {
    try{
        const data = await prismaCLient.resource.findMany();
        res.json(data);

    }catch(err) {
        return res.status(500).json({
            message: "Error"
        })
    }
})


export default userRouter;