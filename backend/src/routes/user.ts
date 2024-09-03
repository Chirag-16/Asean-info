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

userRouter.post("/find", async (req, res) => {
    const { carrier, queue, startTime, endTime} = req.body;

    if(!queue || !startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try{
        const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    const filteredCareers = carrier.filter((c : any) => 
        c.queue === queue &&
        new Date(c.startTime) <= endDate &&
        new Date(c.endTime) >= startDate
      );
    
      res.json(filteredCareers);
    
       }catch(err) {
        return res.status(404).json({
            message: "Not Found"
        })

}
    
})

export default userRouter;