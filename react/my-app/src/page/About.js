import React, { Component } from 'react';
import Text1 from '../components/Text1' 
import Text2 from '../components/Text2' 
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
class About extends Component {
    render() {
      return (
          <div>
            <Welcome name="text1"/>
          </div>
      );
    }
}

export default About;