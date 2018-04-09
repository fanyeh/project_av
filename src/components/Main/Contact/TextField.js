import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <input
        className="textField pb3 mb5 f3-ns f5"
        type="text"
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default TextField;
