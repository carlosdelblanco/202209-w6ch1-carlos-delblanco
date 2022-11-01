import todoList from "../../data/tasksData";
import {
  loadTasksActionCreator,
  taskReducer,
  taskInitialState,
} from "./taskSlice";

describe("Given the function taskReducer", () => {
  describe("When it is invoked", () => {
    describe("And it receives three tasks", () => {
      test("Then it should return three tasks", () => {
        const loadTasksAction = loadTasksActionCreator(todoList);
        const initialTaskListState = taskInitialState;
        const expectedTaskState = {
          tasks: [
            { id: 1, name: "clean", done: true },
            { id: 2, name: "fix door", done: true },
            { id: 3, name: "paint", done: false },
          ],
        };

        const newTaskState = taskReducer(initialTaskListState, loadTasksAction);
        expect(newTaskState).toStrictEqual(expectedTaskState);
      });
    });
  });
});
