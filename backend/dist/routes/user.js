"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const userRouter = (0, express_1.Router)();
const prismaCLient = new client_1.PrismaClient();
userRouter.get("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaCLient.resource.findMany();
        res.json(data);
    }
    catch (err) {
        return res.status(500).json({
            message: "Error"
        });
    }
}));
userRouter.post("/find", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { carrier, queue, startTime, endTime } = req.body;
    if (!queue || !startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
        const filteredCareers = carrier.filter((c) => c.queue === queue &&
            new Date(c.startTime) <= endDate &&
            new Date(c.endTime) >= startDate);
        res.json(filteredCareers);
    }
    catch (err) {
        return res.status(404).json({
            message: "Not Found"
        });
    }
}));
exports.default = userRouter;
