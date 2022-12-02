import express from 'express';
import bodyParser from 'body-parser';

import * as service from '../service/todoService';
import { Params } from '../types/Req';

const router = express.Router();

router.get('/tasks/:userId', async (req, res) => {
  const params: Params = req.params;

  const userId = params.userId;

  const tasks = await service.getAllTasksFromUser(userId);

  res.json(tasks);
});

router.get('/tasks/:userId/:id', async (req, res) => {
  const params: Params = req.params;

  const id = params.id as string;
  const userId = params.userId;

  const onlyTask = await service.getOnlyTask(userId, id);

  res.json(onlyTask);
});

router.post('/tasks/:userId', async (req, res) => {
  const newTask = service.saveTask(req.body);

  res.json(await newTask);
});

// router.post('/tasks', async (req, res) => {});

// router.put('/tasks/:id', async (req, res) => {});

// router.delete('/tasks/:id', async (req, res) => {});

module.exports = router;
