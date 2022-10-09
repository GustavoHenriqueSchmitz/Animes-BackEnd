import { getEvaluation, evaluate } from "../controllers/evaluation_controller";
import server from "../main";

function initRoutes() {
  server.router.get("/evaluation/:anime_id", getEvaluation);
  server.router.post("/evaluate", evaluate);
}

export default initRoutes;
