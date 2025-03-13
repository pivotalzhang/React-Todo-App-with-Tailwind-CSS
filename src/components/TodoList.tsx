import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  filter: 'all' | 'active' | 'completed';
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, editTodo, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p className="text-lg">No tasks found</p>
        <p className="text-sm mt-2">
          {filter === 'all' 
            ? 'Add a new task to get started!' 
            : filter === 'active' 
              ? 'No active tasks. Great job!' 
              : 'No completed tasks yet.'}
        </p>
      </div>
    );
  }

  return (
    <ul className="mt-4">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
