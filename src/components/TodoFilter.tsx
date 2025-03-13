import React from 'react';

interface TodoFilterProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  todosCount: {
    all: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter, todosCount }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
            filter === 'all'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          All
          {todosCount.all > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {todosCount.all}
            </span>
          )}
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
            filter === 'active'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          Active
          {todosCount.active > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {todosCount.active}
            </span>
          )}
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
            filter === 'completed'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          Completed
          {todosCount.completed > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {todosCount.completed}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
