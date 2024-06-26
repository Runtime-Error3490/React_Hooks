import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </>
  );
}

export default Todo;
