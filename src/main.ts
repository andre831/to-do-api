import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();

  res.json({
    success: true,
    payload: tasks,
    message: 'Loaded'
  });
});

app.get(`/tasks/:id`, async (req, res) => {
  const { id } = req.params;

  const onlyTask = await prisma.task.findFirst({
    where: { id: Number(id) }
  });

  res.json({
    success: true,
    payload: onlyTask,
    message: 'Loaded'
  });
});

app.post('/tasks', async (req, res) => {
  const { name, description } = req.body;

  const newTask = await prisma.task.create({
    data: {
      name: name,
      description: description,
      userId: 2
    }
  });

  res.json({
    success: true,
    payload: newTask,
    message: 'Created'
  });
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.body;

  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: { ...req.body }
  });

  res.json({
    success: true,
    payload: updatedTask
  });
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  const deletedTask = await prisma.task.delete({
    where: { id: Number(id) }
  });

  res.json({
    success: true,
    payload: deletedTask,
    status: 'ok',
    message: 'Deleted'
  });
});

app.use((req, res, next) => {
  res.status(404);

  return res.json({
    success: false,
    payload: null,
    message: 'No Loaded'
  });
});

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000')
);
