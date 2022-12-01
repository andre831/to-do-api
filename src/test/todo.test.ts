import axios from 'axios';
import crypto from 'crypto';

import { Task } from '../types/Task';

import * as services from '../service/todoService';

const gen = function () {
  return crypto.randomBytes(20).toString('hex');
};

function request(url: string, method: string, data?: any) {
  return axios({ url, method, data });
}

test('GET ALL TASKS FROM USER', async function () {
  const task = await services.saveTask({
    user_id: 1,
    title: gen(),
    description: gen()
  });

  const response = await axios({
    url: 'http://localhost:3000/tasks/1',
    method: 'get'
  });

  expect(response.data).toHaveLength(1);

  await services.deleteTask(task.id);
});

test('GET ONLY TASK FROM USER', async () => {
  const userId = '1';

  const task = {
    user_id: userId,
    title: gen(),
    description: gen()
  };

  const postTask = await request(
    `http://localhost:3000/tasks/${userId}`,
    'post',
    task
  ).then((res) => res.data as Task);

  const response = await request(
    `http://localhost:3000/tasks/${userId}/${postTask.id}`,
    'get'
  ).then((res) => res.data as Task);

  if (response.id) expect(response.id).toBe(postTask.id);
});
