import React, { useContext, useState } from 'react';
import { TodoListContext } from './context/TodoListContext';
import { MdOutlineAdd } from 'react-icons/md';

export default function Footer() {
  const { setTodoList } = useContext(TodoListContext);
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), title: newTodo, completed: false },
    ]);
    setNewTodo('');
  };
  return (
    <footer>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between border-lightGray border-t-2"
      >
        <input
          className="px-6 py-4 box-border flex-grow"
          type="text"
          value={newTodo}
          placeholder="type text here..."
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
