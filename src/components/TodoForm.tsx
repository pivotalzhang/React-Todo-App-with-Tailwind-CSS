import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 mb-8">
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-4 outline-none text-gray-700"
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="p-4 text-blue-500 hover:text-blue-600 transition-colors"
          disabled={!text.trim()}
          data-testid="add-todo-button"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
