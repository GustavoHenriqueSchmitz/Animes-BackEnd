import { Evaluate, Evaluation } from "../models/evaluation.dto";
import server from "../main";

async function getEvaluationService(animeId: number): Promise<Evaluation> {
  const evaluation = await server.database.evaluation.findUnique({
    where: {
      id: animeId,
    },
    select: {
      evaluation: true,
    },
  });

  return evaluation;
}

async function evaluateService(body: Evaluate): Promise<string | null> {
  try {
    await server.database.evaluation.create({
      data: {
        id: body.anime_id,
        anime: body.anime_name,
        evaluation: body.evaluation,
        summed: body.evaluation,
        quantity: 1,
      },
    });
    return;
  } catch (err) {
    // Try to update
    try {
      const evaluationInformations =
        await server.database.evaluation.findUnique({
          where: {
            id: body.anime_id,
          },
          select: {
            summed: true,
            quantity: true,
          },
        });

      const evaluation: number =
        (Number(evaluationInformations.summed) + body.evaluation) /
          (evaluationInformations.quantity + 1) || 0;

      await server.database.evaluation.update({
        where: {
          id: body.anime_id,
        },
        data: {
          evaluation: evaluation,
          summed: Number(evaluationInformations.summed) + body.evaluation,
          quantity: evaluationInformations.quantity + 1,
        },
      });
      return;
    } catch (err) {
      return "Ops! An error occurred while trying to save the review!";
    }
  }
}

export { getEvaluationService, evaluateService };
