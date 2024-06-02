import { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const updateTodoList = (list) => {
    setTodoList(list);
    localStorage.setItem('todoList', JSON.stringify(list));
  };
  useEffect(() => {
    const savedList = localStorage.getItem('todoList');
    if (savedList === null) {
      setIsLoading(true);
      fetch('data/todo_list.json') //
        .then((res) => {
          if (!res.ok) {
            throw new Error(`${res.status} 에러 발생`);
          }
          return res.json();
        })
        .then((data) => {
          updateTodoList(data);
        })
        .catch((error) => {
          setIsError(true);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setTodoList(JSON.parse(savedList));
    }
  }, []);
  return (
    <TodoListContext.Provider
      value={{ todoList, isLoading, isError, setTodoList, updateTodoList }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
