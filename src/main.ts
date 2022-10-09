import { PrismaClient } from "@prisma/client";
import express from "express";
import { Express } from "express";
import { Router } from "express";
import initRoutes from "./routes/routes";

const server: {
  app: Express;
  serverPort: number;
  router: Router;
  database: PrismaClient;
} = {
  app: express(),
  serverPort: 5000,
  router: Router(),
  database: new PrismaClient(),
};

async function initServer() {
  // Check database
  await server.database.$connect().catch((err) => {
    console.log(err);
  });

  // Config application to use json
  server.app.use(express.json());

  // Define the application routes
  initRoutes();
  server.app.use("/api", server.router);

  server.app.listen(5000, () => {
    console.log("Servidor inicializado na porta 5000");
  });
}
initServer();

export default server;
