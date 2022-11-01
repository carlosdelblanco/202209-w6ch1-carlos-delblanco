import { useDispatch } from "react-redux";
import { useCallback } from "react";
import Tasks from "../redux/features/Task/types";
import { loadTasksActionCreator } from "../redux/features/Task/taskSlice";

const url = process.env.REACT_APP_API_URL_LISTAPI;

const useApi = () => {
  const apiURL = url;
  const dispatch = useDispatch();

  const loadTasksFromApi = useCallback(async () => {
    const response = await fetch(`${apiURL}`);
    const tasksApi: Tasks[] = await response.json();

    dispatch(loadTasksActionCreator(tasksApi));
  }, [apiURL, dispatch]);
  return { loadTasksFromApi };
};
export default useApi;
