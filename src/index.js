import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo-app/todo-app';
import styles from './index.scss';

ReactDOM.render(
  <TodoApp url='http://localhost:8080/api/todos/' pollInterval={2000} />,
  document.getElementById('content')
);
