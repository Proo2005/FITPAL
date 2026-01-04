import express from "express";
import { chatWithGemini } from "../controller/chatController.js";

const router = express.Router();

router.post("/gemini", chatWithGemini);

export default router;
