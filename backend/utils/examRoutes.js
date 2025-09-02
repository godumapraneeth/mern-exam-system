import express from "express";
import { startExam,submitExam } from "../controllers/examController.js";
import { protect } from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/start",protect,startExam);
router.post("/submit",protect,submitExam);

export default router;