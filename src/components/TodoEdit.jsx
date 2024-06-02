import React, { useContext, useRef, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoEdit({ setIsEdit, id }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [editedTodo, setEditedTodo] = useState('');
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
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editedTodo };
      }
      return todo;
    });
    setTodoList(newList);
    stopEdit();
  };
  return (
    <>
      <input
        type="text"
        value={editedTodo}
        ref={inputRef}
        onChange={(e) => {
          setEditedTodo(e.target.value);
        }}
      />
      <button onClick={stopEdit}>취소</button>
      <button onClick={editTodo}>수정</button>
    </>
  );
}
