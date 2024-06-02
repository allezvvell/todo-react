import React, { useState } from 'react';
import TodoDefault from './TodoDefault';
import TodoEdit from './TodoEdit';

export default function Todo({ title, completed, id }) {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <>
        <TodoEdit
          setIsEdit={setIsEdit}
          id={id}
          title={title}
          completed={completed}
        />
      </>
    );
  }
  return (
    <>
      <TodoDefault
        setIsEdit={setIsEdit}
        id={id}
        title={title}
        completed={completed}
      />
    </>
  );
}
