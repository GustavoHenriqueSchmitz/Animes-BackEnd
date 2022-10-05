import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function getEvaluation(req: Request, res: Response) {
  const paramId: string = req.params.anime_id;
  const animeId: number = parseInt(paramId);

  const evaluation = prisma.evaluation.findUnique({
    where: {
      id: animeId,
    },
    select: {
      evaluation: true,
    },
  });

  return res.json({ evaluation: evaluation });
}

export { getEvaluation };
