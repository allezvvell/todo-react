import React, { useContext, useState } from 'react';
import { TodoListContext } from './context/TodoListContext';
import { MdOutlineAdd } from 'react-icons/md';
import { DarkModeContext } from './context/DarkModeContext';

export default function Footer() {
  const { todoList, updateTodoList } = useContext(TodoListContext);
  const { darkMode } = useContext(DarkModeContext);
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [
      ...todoList,
      { id: Date.now(), title: newTodo, completed: false },
    ];
    updateTodoList(newList);
    setNewTodo('');
  };
  return (
    <footer>
      <form
        onSubmit={handleSubmit}
        className={`flex justify-between shadow-custom`}
      >
        <input
          className={`px-6 py-4 box-border flex-grow ${
            darkMode
              ? 'bg-lightDark placeholder:text-white text-white'
              : 'bg-white'
          }`}
          type="text"
          value={newTodo}
          placeholder="Type text here..."
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button type="submit" className="bg-green text-white px-5 text-2xl">
          <MdOutlineAdd />
        </button>
      </form>
    </footer>
  );
}
