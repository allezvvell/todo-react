import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoCheckBox({ id, completed }) {
  const { todoList, updateTodoList } = useContext(TodoListContext);
  const handleChange = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    updateTodoList(newTodoList);
  };
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={handleChange}
        checked={completed}
      />
      <label
        htmlFor={id}
        className={`w-4 h-4 mr-2 cursor-pointer border-gray border rounded-sm bg-white flex justify-center items-center ${
          completed
            ? "after:content-['✔'] after:text-peacock after:font-bold"
            : ''
        }`}
      ></label>
    </>
  );
}
