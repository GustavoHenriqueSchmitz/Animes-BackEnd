import { Decimal } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { Evaluate, Evaluation } from "../models/evaluation.dto";
import {
  evaluateService,
  getEvaluationService,
} from "../services/evaluation_services";

async function getEvaluation(req: Request, res: Response) {
  const paramId: string = req.params.anime_id;
  const animeId: number = parseInt(paramId);

  const evaluation: Evaluation | null = await getEvaluationService(animeId);

  if (!evaluation) {
    return res
      .json({ data: { evaluation: "0.0" }, message: "", err: false })
      .status(200);
  }

  return res.json({ data: evaluation, message: "", err: false }).status(200);
}

async function evaluate(req: Request, res: Response) {
  const body: Evaluate = req.body;

  const err = await evaluateService(body);

  if (err) {
    return res.json({ data: null, message: err, err: true }).status(400);
  }

  return res
    .json({ data: null, message: "Avaliação recebida!", err: false })
    .status(200);
}

export { getEvaluation, evaluate };
