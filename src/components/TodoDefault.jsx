import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

export default function TodoDefault({ completed, title, setIsEdit, id }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const handleChange = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const deleteTodo = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <input type="checkbox" onChange={handleChange} checked={completed} />
      <span className="flex-grow truncate">{title}</span>
      <button
        onClick={() => {
          setIsEdit(true);
        }}
      >
        <RiEdit2Fill />
      </button>
      <button onClick={deleteTodo}>
        <MdDelete />
      </button>
    </>
  );
}
