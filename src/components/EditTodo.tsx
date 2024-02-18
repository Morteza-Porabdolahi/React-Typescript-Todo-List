import { FormEvent, useState } from "react";

interface EditTodoProps {
  editTodo: (newText: string, id: number) => void;
  todoId: number;
}

export const EditTodo = ({ editTodo, todoId }: EditTodoProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [newText, setNewText] = useState('');

  function handleSubmit(e: FormEvent, todoId: number) {
    e.preventDefault();
    editTodo(newText, todoId);
    setNewText('');
    setIsHidden(true);
  }

  return (
    <>
      <button onClick={() => setIsHidden(h => !h)} className="bg-yellow-600 rounded shadow-md px-4 py-1.5 transition hover:bg-yellow-700">Edit</button>
      <form onSubmit={(e) => handleSubmit(e, todoId)} className={isHidden ? 'hidden' : ''}>
        <input value={newText} onChange={(e) => setNewText(e.target.value)} className="bg-zinc-900 shadow-lg rounded outline-none text-zinc-300 px-3 py-1.5 placeholder:text-sm" placeholder="Type whatever you want..." type="text" id="todo-text" />
        <button type="submit" className="bg-green-600 rounded -ml-8 text-lg py-.5 px-1.5 hover:bg-green-700 transition">✔</button>
      </form>
    </>
  )
}
