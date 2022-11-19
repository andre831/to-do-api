import axios from 'axios';

test('primeiro teste', async function () {
  const tasks = await axios({
    url: 'http://localhost:3000/tasks/1',
    method: 'get'
  });

  console.log(tasks.data);
});
