import React from 'react';
import Todo from '../todo/todo';
import styles from './todo-list.scss';
import CSSModules from 'react-css-modules';

class TodoList extends React.Component {
  render() {
    let todoNodes = this.props.data.map(todo => {
      return (<Todo key={todo.id} data={todo} onChange={this.props.onChange} onDelete={this.props.onDelete}/>);
    });

    return (
      <ul styleName="list">{todoNodes}</ul>
    );
  }
}

export default CSSModules(TodoList, styles);
