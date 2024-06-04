import React, { useState } from 'react';
import TodoDefault from './TodoDefault';
import TodoEdit from './TodoEdit';

export default function Todo({ todo }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li className="font-list px-6 py-4 flex items-center bg-white odd:bg-light dark:bg-dark dark:odd:bg-deepDark">
      {isEdit ? (
        <TodoEdit setIsEdit={setIsEdit} todo={todo} />
      ) : (
        <TodoDefault setIsEdit={setIsEdit} todo={todo} />
      )}
    </li>
  );
}
