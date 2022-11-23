import axios from 'axios';
import crypto from 'crypto';

import * as services from '../service/todoService';

const gen = function () {
  return crypto.randomBytes(20).toString('hex');
};

test('GET ALL TASKS FROM USER: ', async function () {
  //given
  const task = await services.saveTask({
    user_id: 1,
    title: gen(),
    description: gen()
  });

  //when
  const response = await axios({
    url: 'http://localhost:3000/tasks/1',
    method: 'get'
  });

  //then
  expect(response.data).toHaveLength(1);

  await services.deleteTask(task.id);
});
