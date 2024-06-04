import React, { useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import TodoCheckBox from './TodoCheckBox';

export default function TodoDefault({ todo, setIsEdit }) {
  const { deleteTodo } = useContext(TodoListContext);
  const { completed, title } = todo;

  return (
    <>
      <TodoCheckBox todo={todo} />
      <span
        className={`flex-grow truncate leading-7 dark:text-white ${
          completed ? 'line-through text-gray' : ''
        }`}
      >
        {title}
      </span>
      <button
        className="text-xl ml-2 hover:text-peacock transition-colors text-chacol dark:text-white"
        onClick={() => {
          setIsEdit(true);
        }}
      >
        <RiEdit2Fill />
      </button>
      <button
        className="text-xl ml-2 hover:text-peacock transition-colors text-chacol dark:text-white"
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        <MdDelete />
      </button>
    </>
  );
}
