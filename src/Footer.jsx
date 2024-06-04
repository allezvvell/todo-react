import React, { useContext, useState } from 'react';
import { TodoListContext } from './context/TodoListContext';
import { MdOutlineAdd } from 'react-icons/md';

export default function Footer() {
  const { addTodo } = useContext(TodoListContext);
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim().length === 0) return;
    addTodo({ id: Date.now(), title: newTodo, completed: false });
    setNewTodo('');
  };
  return (
    <footer>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between shadow-custom"
      >
        <input
          className="px-6 py-4 box-border flex-grow bg-white dark:bg-lightDark dark:text-white dark:placeholder:text-white"
          type="text"
          value={newTodo}
          placeholder="Type text here..."
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button type="submit" className="bg-green text-white px-5 text-2xl">
          <MdOutlineAdd className="hover:rotate-90 transition-all" />
        </button>
      </form>
    </footer>
  );
}
