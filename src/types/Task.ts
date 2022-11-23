export interface Task {
  id: number | string;
  user_id: number | string;
  title: string;
  description: string;
  created_at: string;
}

export interface NewTask {
  user_id: number | string;
  title: string;
  description: string;
}
