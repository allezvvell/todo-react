import { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('data/todo_list.json') //
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} 에러 발생`);
        }
        return res.json();
      })
      .then((data) => {
        setTodoList(data);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <TodoListContext.Provider
      value={{ todoList, isLoading, isError, setTodoList }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
