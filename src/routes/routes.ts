import { Router } from "express";
import { getEvaluation } from "../controllers/evaluation_controller";

const router = Router();

router.get("/evaluation/:anime_id", getEvaluation);

export default router;
