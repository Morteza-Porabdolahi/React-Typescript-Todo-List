import { useState } from "react";

import { TodoInterface } from "../todo.model"

import { EditTodo } from "./EditTodo";
import { DeleteTodo } from "./DeleteTodo";

interface TodoProps {
  editTodo: (newText: string, id: number) => void;
  todo: TodoInterface;
  deleteTodo: (id: number) => void;
}

export const Todo = ({ todo, editTodo, deleteTodo }: TodoProps) => {
  return (
    <li className="m-4 rounded p-4 bg-zinc-800 flex flex-col gap-3 items-start shadow-md">
      <span className="font-semibold">{todo.text}</span>
      <div className="flex gap-2">
        <DeleteTodo deleteTodo={deleteTodo} todoId={todo.id} />
        <EditTodo editTodo={editTodo} todoId={todo.id} />
      </div>
    </li>
  )
}
