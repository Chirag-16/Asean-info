import express from "express";
import userRouter from "./routes/user"
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.listen(process.env.PORT || 8000);