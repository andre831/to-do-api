import * as todo from '../data/todoData';
import { NewTask } from '../types/Task';

function getAllTasksFromUser(id: string) {
  return todo.getTask(id);
}

function saveTask(task: NewTask) {
  return todo.saveTask(task);
}

function deleteTask(id: number) {
  return todo.deleteTask(id);
}

export { getAllTasksFromUser, saveTask, deleteTask };
