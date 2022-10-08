import { Router } from "express";
import { getEvaluation, evaluate } from "../controllers/evaluation_controller";

const router: Router = Router();

router.get("/evaluation/:anime_id", getEvaluation);
router.post("/evaluate", evaluate);

export default router;
