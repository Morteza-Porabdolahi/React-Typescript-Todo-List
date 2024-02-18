interface DeleteTodoProps {
  deleteTodo: (id: number) => void;
  todoId: number;
}

export const DeleteTodo = ({ deleteTodo, todoId }: DeleteTodoProps) => {
  return (
    <button className="bg-red-700 rounded shadow-md px-4 py-1.5 transition hover:bg-red-800" onClick={() => deleteTodo(todoId)}>Delete</button>
  )
}
