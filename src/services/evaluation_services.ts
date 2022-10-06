import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { Evaluate, Evaluation } from "../models/evaluation.dto";

const prisma = new PrismaClient();

async function getEvaluationService(
  animeId: number
): Promise<Evaluation | null> {
  const evaluation = await prisma.evaluation.findUnique({
    where: {
      id: animeId,
    },
    select: {
      evaluation: true,
    },
  });

  return evaluation;
}

async function evaluateService(body: Evaluate): Promise<string> {
  try {
    await prisma.evaluation.create({
      data: {
        id: body.anime_id,
        anime: body.anime_name,
        evaluation: body.evaluation,
        summed: body.evaluation,
        quantity: 1,
      },
    });
    return "Avaliação recebida!";
  } catch (err) {
    // Try to update
    try {
      const evaluation = await prisma.evaluation.findUnique({
        where: {
          id: body.anime_id,
        },
        select: {
          summed: true,
          quantity: true,
        },
      });

      await prisma.evaluation.update({
        where: {
          id: body.anime_id,
        },
        data: {
          evaluation: body.evaluation,
          summed: +body.evaluation,
          quantity: +1,
        },
      });
      return "Avaliação recebida!";
    } catch (err) {
      return "Ops! Ouve um erro ao tentar salvar sua avaliação!";
    }
  }
}

export { getEvaluationService, evaluateService };
