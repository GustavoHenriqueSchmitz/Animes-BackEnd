import { Request, Response } from "express";
import { Evaluate, Evaluation } from "../models/evaluation.dto";
import {
  evaluateService,
  getEvaluationService,
} from "../services/evaluation_services";

async function getEvaluation(req: Request, res: Response) {
  const paramId: string = req.params.anime_id;
  const animeId: number = parseInt(paramId);

  const evaluation: Evaluation = await getEvaluationService(animeId);

  if (!evaluation) {
    return res
      .json({ data: { evaluation: "0.0" }, message: "", err: false })
      .status(200);
  }

  return res.json({ data: evaluation, message: "", err: false }).status(200);
}

async function evaluate(req: Request, res: Response) {
  const body: Evaluate = req.body;

  if (body.evaluation > 10.0 || body.evaluation < 0.0) {
    return res
      .json({
        data: null,
        message: "Invalid rating, try something from 0.00 to 10.00.",
        err: true,
      })
      .status(400);
  }

  const err: string = await evaluateService(body);

  if (err) {
    return res.json({ data: null, message: err, err: true }).status(400);
  }

  return res
    .json({ data: null, message: "Evaluation Received!", err: false })
    .status(200);
}

export { getEvaluation, evaluate };
