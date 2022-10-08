import { PrismaClient } from "@prisma/client";
import express from "express";
import { Express } from "express";
import router from "./routes/routes";

const server: { app: Express; serverPort: number } = {
  app: express(),
  serverPort: 5000,
};

const prisma = new PrismaClient();

// Check database
prisma.$connect().catch((err) => {
  console.log(err);
});

// Config application to use json
server.app.use(express.json());

// Define the application routes
server.app.use("/api", router);

server.app.listen(5000, () => {
  console.log("Servidor inicializado na porta 5000");
});
