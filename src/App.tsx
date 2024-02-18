import { useState } from "react";

import { TodoInterface } from "./todo.model";

import { Todos } from "./components/Todos";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./components/Todo";

export function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function createTodo(text: string) {
    setTodos(todos => [...todos, { id: Math.random() * 1_000_000, text }])
  }

  function deleteTodo(id: number) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  function editTodo(newTitle: string, todoId: number) {
    setTodos(todos => todos.map(todo => {
      if (todo.id === todoId) {
        return { id: todo.id, text: newTitle };
      } else {
        return todo;
      }
    }))
  }


  return (
    <section className="p-4 bg-zinc-900 h-screen text-zinc-300">
      <NewTodo createTodo={createTodo} />
      <Todos>
        {todos.length <= 0 ? (
          <p className="mt-12 text-lg text-center text-zinc-800">No todos found! Try to add something.</p>
        ) : (

          <ul>
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
            ))}
          </ul>
        )
        }
      </Todos>
    </section>
  )
}

