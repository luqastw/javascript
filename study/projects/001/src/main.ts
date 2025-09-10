import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let nextId = 1;

app.post("/tasks", (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Título é obrigatório." });
  }

  const newTask: Task = { id: nextId++, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "404: Task not found." });

  if (typeof completed !== "boolean") {
    return res.status(400).json({ error: "400: Completed must be boolean." });
  }

  task.completed = completed;
  res.json(task);
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ error: "404: Task not found." });

  const deletedTask = tasks.splice(index, 1);
  res.json(deletedTask[0]);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
