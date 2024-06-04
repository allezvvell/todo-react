import React, { useContext } from 'react';
import Todo from './components/TodoList/Todo';
import { TodoListContext } from './context/TodoListContext';
import { FilterContext } from './context/FilterContext';
import Spinner from './components/Spinner';

export default function TodoList() {
  const { todoList, isLoading, isError } = useContext(TodoListContext);
  const { filter } = useContext(FilterContext);

  const filteredList = getFilteredList(todoList, filter);

  if (isLoading)
    return (
      <div className="flex-grow overflow-auto relative bg-white dark:bg-dark">
        <Spinner isLoading={isLoading} />
      </div>
    );
  if (isError)
    return (
      <div className="flex-grow overflow-auto bg-white dark:bg-dark dark:text-white">
        에러가 발생했습니다. 새로고침 해주세요.
      </div>
    );
  return (
    <div className="flex-grow overflow-auto bg-white dark:bg-dark">
      <p className="px-6 py-2 text-chacol dark:text-white">
        {filteredList.length} {filteredList.length > 1 ? 'items' : 'item'}
      </p>
      <ul>
        {filteredList.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

const getFilteredList = (todoList, filter) => {
  switch (filter) {
    case 'all':
      return [...todoList];
    case 'active':
      return todoList.filter((todo) => !todo.completed);
    case 'completed':
      return todoList.filter((todo) => todo.completed);
    default:
      throw new Error(`${filter} 잘못된 필터입니다`);
  }
};
