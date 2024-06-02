import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import TodoCheckBox from './TodoCheckBox';
import { FaXmark } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoEdit({ setIsEdit, id, title, completed }) {
  const { todoList, updateTodoList } = useContext(TodoListContext);
  const { darkMode } = useContext(DarkModeContext);
  const [editedTodo, setEditedTodo] = useState(title);
  const inputRef = useRef(null);

  const stopEdit = () => {
    setIsEdit(false);
    setEditedTodo('');
  };
  const editTodo = () => {
    if (editedTodo.trim() === '') {
      inputRef.current.focus();
      return;
    }
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editedTodo };
      }
      return todo;
    });
    updateTodoList(newList);
    stopEdit();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <TodoCheckBox id={id} completed={completed} />
      <input
        type="text"
        className={`flex-grow rounded-md border line leading-7 box-border ${
          darkMode ? 'border-white bg-transparent text-white' : 'border-gray'
        }`}
        value={editedTodo}
        ref={inputRef}
        onChange={(e) => {
          setEditedTodo(e.target.value);
        }}
      />
      <button
        onClick={stopEdit}
        className={`text-xl ml-2 hover:text-peacock transition-colors ${
          darkMode ? 'text-white' : 'text-chacol'
        }`}
      >
        <FaXmark />
      </button>
      <button
        onClick={editTodo}
        className={`text-xl ml-2 hover:text-peacock transition-colors ${
          darkMode ? 'text-white' : 'text-chacol'
        }`}
      >
        <FaCheck />
      </button>
    </>
  );
}
