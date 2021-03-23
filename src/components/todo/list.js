import React from 'react';

class ListTodo extends React.Component {
  render() {
    return(
      <>
        <ul>
        {this.props.list.map((item, index) => (
          <li key={index} style={{ marginTop: '8px', listStyle: 'none'}}>
            <input type="checkbox" />
            <span> {item.name} </span>
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
export default ListTodo;