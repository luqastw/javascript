import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${port}`);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inicialização de testes usando Express.js.");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
