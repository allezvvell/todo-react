import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoListContext } from '../../context/TodoListContext';
import TodoCheckBox from './TodoCheckBox';
import { FaXmark } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

export default function TodoEdit({ setIsEdit, todo }) {
  const { updateTodo } = useContext(TodoListContext);
  const { title } = todo;
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
    updateTodo({ ...todo, title: editedTodo });
    stopEdit();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <TodoCheckBox todo={todo} />
      <input
        type="text"
        className="flex-grow rounded-md border line leading-7 box-border border-gray dark:border-white bg:bg-transparent bg:text-white"
        value={editedTodo}
        ref={inputRef}
        onChange={(e) => {
          setEditedTodo(e.target.value);
        }}
      />
      <button
        onClick={stopEdit}
        className="text-xl ml-2 hover:text-peacock transition-colors text-chacol dark:text-white"
      >
        <FaXmark />
      </button>
      <button
        onClick={editTodo}
        className="text-xl ml-2 hover:text-peacock transition-colors text-chacol dark:text-white"
      >
        <FaCheck />
      </button>
    </>
  );
}
