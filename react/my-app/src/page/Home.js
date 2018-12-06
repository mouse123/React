import React, { Component } from 'react';
import Text1 from '../components/Text1' 
import Text2 from '../components/Text2' 

class Home extends Component {
    render() {
      return (
          <div>
            <Text1 name="Text1"/>
            <Text2 name="Text2"/>
          </div>
      );
    }
}

export default Home;