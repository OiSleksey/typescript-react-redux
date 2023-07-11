import axios from 'axios';
import { Dispatch } from 'react';
import { ActionsTypes } from './types';

interface Todo {
  id: number;
  title: string;
  competed: boolean;
}

type FetchAction = {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
};

// interface FetchTodosAction {
//   type: ActionsTypes.fetchTodos;
//   payload: Todo[];
// }

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchAction>) => {
    const response = await axios.get<Todo[]>(url);

    dispatch(
      //   <FetchTodosAction>
      {
        type: ActionsTypes.fetchTodos,
        payload: response.data,
      }
    );
  };
};
