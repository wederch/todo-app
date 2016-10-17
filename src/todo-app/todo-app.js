import React from 'react';
import TodoList from '../todo-list/todo-list';
import TodoForm from '../todo-form/todo-form';
import styles from './todo-app.scss';
import CSSModules from 'react-css-modules';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    this.loadTodos = this.loadTodos.bind(this);
  }

  loadTodos() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(json => this.setState({data: json}));
  }

  _createTodo = (todo) => {
    fetch(this.props.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
  };

  _updateTodo = (todo) => {
    fetch(this.props.url + todo.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
  };

  _deleteTodo = (id) => {
    fetch(this.props.url + id, {method: 'DELETE'});
  };

  componentDidMount() {
    this.loadTodos();
    setInterval(this.loadTodos, this.props.pollInterval);
  }

  render() {
    return (
      <div styleName="view-box" id="todoBox">
        <h1 styleName="title">Todos</h1>
        <TodoForm onSubmit={this._createTodo}/>
        <TodoList data={this.state.data} onChange={this._updateTodo} onDelete={this._deleteTodo}/>
      </div>
    );
  }
}

export default CSSModules(TodoApp, styles);
