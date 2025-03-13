import React from 'react';
import { CheckCircle, Clock, Trash } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
  clearCompleted: () => void;
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos, clearCompleted }) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const completionPercentage = todos.length > 0 
    ? Math.round((completedCount / todos.length) * 100) 
    : 0;

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 sm:w-48">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{completionPercentage}% done</span>
        </div>
        
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="flex items-center text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            <Trash size={16} className="mr-1" />
            Clear completed
          </button>
        )}
      </div>
      
      <div className="flex justify-around text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center text-blue-500 mb-1">
            <CheckCircle size={16} className="mr-1" />
            <span className="text-sm font-medium">Completed</span>
          </div>
          <span className="text-2xl font-bold text-gray-700">{completedCount}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center text-amber-500 mb-1">
            <Clock size={16} className="mr-1" />
            <span className="text-sm font-medium">Remaining</span>
          </div>
          <span className="text-2xl font-bold text-gray-700">{activeCount}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center text-gray-500 mb-1">
            <span className="text-sm font-medium">Total</span>
          </div>
          <span className="text-2xl font-bold text-gray-700">{todos.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
