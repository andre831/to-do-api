import express from 'express';
import bodyParser from 'body-parser';

import * as service from '../service/todoService';
import { Params } from '../types/Req';

const router = express.Router();

router.get('/tasks/:id', async (req, res) => {
  const params: Params = req.params;

  const id = params.id;

  const tasks = await service.getAllTasksFromUser(id);

  res.json(tasks);
});
// router.get('/tasks/:id', async (req, res) => {});

// router.post('/tasks', async (req, res) => {});
// router.post('/tasks/:id', async (req, res) => {});

// router.put('/tasks/:id', async (req, res) => {});

// router.delete('/tasks/:id', async (req, res) => {});

module.exports = router;
