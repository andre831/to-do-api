import * as todo from '../data/todoData';

function getAllTasksFromUser(id: string) {
  return todo.getTask(id);
}

export { getAllTasksFromUser };
