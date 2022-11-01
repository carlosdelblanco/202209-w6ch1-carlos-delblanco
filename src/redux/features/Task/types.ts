interface Tasks {
  id: number;
  name: string;
  done: boolean;
}

export interface TaskState {
  list: Tasks[];
}

export default Tasks;
