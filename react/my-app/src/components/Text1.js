import React, { Component } from 'react';

class Text1 extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Text1;