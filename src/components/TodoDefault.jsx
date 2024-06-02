import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import TodoCheckBox from './TodoCheckBox';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoDefault({ completed, title, setIsEdit, id }) {
  const { todoList, updateTodoList } = useContext(TodoListContext);
  const { darkMode } = useContext(DarkModeContext);

  const deleteTodo = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    updateTodoList(newTodoList);
  };
  return (
    <>
      <TodoCheckBox id={id} completed={completed} />
      <span
        className={`flex-grow truncate leading-7 ${
          completed ? 'line-through text-gray' : ''
        } ${darkMode ? 'text-white' : ''}`}
      >
        {title}
      </span>
      <button
        className={`text-xl ml-2 hover:text-peacock transition-colors ${
          darkMode ? 'text-white' : 'text-chacol'
        }`}
        onClick={() => {
          setIsEdit(true);
        }}
      >
        <RiEdit2Fill />
      </button>
      <button
        className={`text-xl ml-2 hover:text-peacock transition-colors ${
          darkMode ? 'text-white' : 'text-chacol'
        }`}
        onClick={deleteTodo}
      >
        <MdDelete />
      </button>
    </>
  );
}
