import * as todo from '../data/todoData';
import { NewTask } from '../types/Task';

function getAllTasksFromUser(id: string) {
  return todo.getTask(id);
}

function getOnlyTask(userId: string, id: string) {
  return todo.getOnlyTask(userId, id);
}

function saveTask(task: NewTask) {
  return todo.saveTask(task);
}

function deleteTask(id: number) {
  return todo.deleteTask(id);
}

export { getAllTasksFromUser, getOnlyTask, saveTask, deleteTask };
