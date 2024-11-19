import { useState } from "react";
import React from "react";

export default function App() {
  const [todos, setTodos] = useState(["test1", "test2"]);

  const onAction = async (formData) => {
    const todo = formData.get("todo");

    setTodos([...todos, todo]);
  };

  const deleteTodo = (text) => {
    
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <form 
      action={onAction} 
      className="flex items-center gap-2">
        <input name="todo" className="border rounded-md px-2 py-3 flex-1" />
        <button type="submit" className="border rounded-md px-4 py-3 bg-zinc-800 text-white">
        Add
        </button>
      </form>
      <ul className="list-disc list_inside w-full">
        {todos.map((todo) => (
          <li key={todo} className="flex items-center gap-4 bg-zinc-200 px-4 py-2">
            <span className="w-full">{todo}</span>
          <button onClick={() => deleteTodo(todo)} className="border border-zinc-800 rounded-md p-1 text-xs">supp</button></li>
        ))}
      </ul>
    </div>
  );
}
