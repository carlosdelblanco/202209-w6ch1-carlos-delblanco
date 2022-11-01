import tasksList from "../../data/tasksData";
import { loadTasksActionCreator } from "./taskSlice";
import { TaskState } from "./types";

describe("Given the function taskReducer", () => {
  describe("When it is invoked", () => {
    describe("And it receives three tasks", () => {
      test("Then it should return three tasks", () => {
        const loadTasksAction = loadTasksActionCreator(tasksList);
        const currentTaskListState: TaskState = { Tasks: [] };
      });
    });
  });
});
