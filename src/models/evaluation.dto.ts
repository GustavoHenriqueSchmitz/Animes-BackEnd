import { Decimal } from "@prisma/client/runtime";

export class Evaluate {
  anime_id: number;
  anime_name: string;
  evaluation: number;
}

export class Evaluation {
  evaluation: Decimal;
}
