import { db as database } from '../infra/database';

function getTask(id: string) {
  return database.query(`SELECT * FROM todo.tasks WHERE "user_id"=${id}`);
}

export { getTask };
