import React, { useContext, useState, useEffect } from 'react';
import Todo from './components/Todo';
import { TodoListContext } from './context/TodoListContext';
import { TabContext } from './context/TabContext';
import { DarkModeContext } from './context/DarkModeContext';

export default function TodoList() {
  const { todoList, isLoading, isError } = useContext(TodoListContext);
  const { tab } = useContext(TabContext);
  const { darkMode } = useContext(DarkModeContext);
  const [filteredList, setFilteredList] = useState(todoList);
  useEffect(() => {
    let newList;
    switch (tab) {
      case 'all':
        newList = todoList?.filter((todo) => todo);
        break;
      case 'active':
        newList = todoList?.filter((todo) => !todo.completed);
        break;
      case 'completed':
        newList = todoList?.filter((todo) => todo.completed);
        break;
      default:
        return;
    }
    setFilteredList(newList);
  }, [tab, todoList]);

  if (isLoading) return <div>Loaindg...</div>;
  if (isError) return <div>에러가 발생했습니다. 새로고침 해주세요.</div>;
  return (
    <div
      className={`flex-grow overflow-auto ${darkMode ? 'bg-dark' : 'bg-white'}`}
    >
      <p className={`px-6 py-2 ${darkMode ? 'text-white' : 'text-chacol'}`}>
        {filteredList?.length} {filteredList.length > 1 ? 'items' : 'item'}
      </p>
      <ul>
        {filteredList?.map((todo) => (
          <li
            key={todo.id}
            className={`font-list px-6 py-4 flex items-center ${
              darkMode ? 'bg-dark odd:bg-deepDark' : 'bg-white odd:bg-light'
            }`}
          >
            <Todo title={todo.title} completed={todo.completed} id={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
