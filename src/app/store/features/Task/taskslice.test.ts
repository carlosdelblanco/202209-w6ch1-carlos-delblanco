import todoList from "../../data/tasksData";
import { loadTasksActionCreator, taskReducer } from "./taskSlice";
import { TaskState } from "./types";

describe("Given the function taskReducer", () => {
  describe("When it is invoked", () => {
    describe("And it receives three tasks", () => {
      test("Then it should return three tasks", () => {
        const loadTasksAction = loadTasksActionCreator(todoList);
        const currentTaskListState: TaskState = {
          list: [],
        };
        const expectedTaskState: TaskState = {
          list: todoList,
        };
        const newTaskState = taskReducer(currentTaskListState, loadTasksAction);
        expect(newTaskState).toStrictEqual(expectedTaskState);
      });
    });
  });
});
