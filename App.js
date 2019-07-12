import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Image source={require("./images/pic.jpg")} style={{width: 420, height: 800}}/>
    );
  }
}

