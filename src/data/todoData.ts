import { db as database } from '../infra/database';
import { Task, NewTask } from '../types/Task';

function getTask(id: string) {
  return database.query(`SELECT * FROM todo.tasks WHERE "user_id"=${id}`);
}

function saveTask(task: NewTask) {
  return database.one(
    `INSERT INTO todo.tasks ("user_id", title, description) VALUES (${task.user_id},'${task.title}' ,'${task.description}') returning *`
  );
}

function deleteTask(id: number) {
  return database.one(`DELETE FROM todo.tasks WHERE id=${id} returning *`);
}

export { getTask, saveTask, deleteTask };
