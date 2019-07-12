import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.a}>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
      <Image source={require("./images/pic.jpg")} style={{width: 420, height: 600}}/>
      <Blink text='she is gorgeous' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  a: {
    fontSize: 20,
    color: '#9400d3'
    
  }
});