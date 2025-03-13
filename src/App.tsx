import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoStats from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const todosCount = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-md">
              <CheckCircle size={40} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Master</h1>
          <p className="text-gray-600">Organize your tasks efficiently</p>
        </header>

        <main className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-8">
          <TodoForm addTodo={addTodo} />
          
          {todos.length > 0 && (
            <>
              <TodoFilter 
                filter={filter} 
                setFilter={setFilter} 
                todosCount={todosCount} 
              />
              
              <TodoList 
                todos={todos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo} 
                filter={filter} 
              />
              
              <TodoStats todos={todos} clearCompleted={clearCompleted} />
            </>
          )}
          
          {todos.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4 text-gray-400">
                <CheckCircle size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks yet</h3>
              <p className="text-gray-500">Add your first task to get started!</p>
            </div>
          )}
        </main>
        
        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Task Master. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
