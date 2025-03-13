import React from 'react';
import { Check, Trash2, Edit } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center flex-1">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`flex-shrink-0 w-6 h-6 mr-3 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-emerald-400'
          }`}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="flex-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span 
            className={`flex-1 ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Edit size={18} />
          </button>
        )}
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
