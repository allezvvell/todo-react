import React, { useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext';

export default function TodoCheckBox({ todo }) {
  const { updateTodo } = useContext(TodoListContext);
  const { id, completed } = todo;

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        onChange={() => {
          updateTodo({ ...todo, completed: !completed });
        }}
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
