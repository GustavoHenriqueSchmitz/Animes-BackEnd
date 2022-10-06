import { Router } from "express";
import { getEvaluation } from "../controllers/evaluation_controller";

const router: Router = Router();

router.get("/evaluation/:anime_id", getEvaluation);
//router.post("/evaluate/:anime_id", evaluate)

export default router;
