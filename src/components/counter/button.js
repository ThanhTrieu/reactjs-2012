import React from 'react';

class ButtonCounter extends React.Component {

  render() {
    return (
      <>
        <button type={this.props.type}>{this.props.children}</button>
      </>
    )
  }
}
export default ButtonCounter;