import { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const addTodo = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };
  const deleteTodo = (todo) => {
    setTodoList((prev) => prev.filter((t) => t.id !== todo.id));
  };
  const updateTodo = (todo) => {
    setTodoList((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
  };

  useEffect(() => {
    const savedList = localStorage.todoList;
    if (savedList === undefined) {
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
    } else {
      setTodoList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.todoList = JSON.stringify(todoList);
  }, [todoList]);

  return (
    <TodoListContext.Provider
      value={{ todoList, isLoading, isError, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
