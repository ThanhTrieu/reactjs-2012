import React from 'react';
import PropTypes from 'prop-types';
import './todo.css';

class ListTodo extends React.Component {
  render() {
    return(
      <>
        <ul>
        {this.props.list.map((item, index) => (
          <li key={index} style={{ marginTop: '8px', listStyle: 'none'}}>
            <input type="checkbox" onClick={() => this.props.finish(item.id)} />
            <span className={item.done ? 'delete' : ''}> {item.name} </span>
            <button
              onClick={() => this.props.remove(item.id)}
              style={{ marginLeft: '5px' }}
            > X </button>
          </li>
        ))}
        </ul>
      </>
    )
  }
}
ListTodo.propTypes = {
  list: PropTypes.array,
  remove: PropTypes.func,
  finish: PropTypes.func
}
export default ListTodo;