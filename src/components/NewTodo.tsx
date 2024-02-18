import { FormEvent, useState } from "react"

interface NewTodoProps {
  createTodo: (text: string) => void;
}

export const NewTodo = ({ createTodo }: NewTodoProps) => {
  const [todoText, setTodoText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if(!todoText.trim()) return;
    
    createTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="todo-text">Todo Title: </label>
        <input className="bg-zinc-800 shadow-lg rounded outline-none text-zinc-300 px-2 py-1" placeholder="Type whatever you want..." value={todoText} onChange={(e) => setTodoText(e.target.value)} type="text" id="todo-text" />
      </div>
      <button className="bg-zinc-800 rounded px-3 py-2 hover:bg-zinc-950 transition shadow-md" type="submit">Add Todo</button>
    </form>
  )
}
