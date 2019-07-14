import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableNativeFeedback, Alert , Platform } from 'react-native';

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
  _onPressButton() {
    // Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Image source={require("./images/car.jpg")} style={styles.pic}/>
     <View style={{flex:1}}>
      <Blink text='M5 vs E63s' />
     </View>
     <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>click here for ripple effect</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  a: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 150,
    marginTop: 50
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    borderRadius:10,
    alignSelf: "center",
    backgroundColor: '#87cefa'
  },
  buttonText: {
    padding: 20,
    color: 'black'
  },
  pic: {
    alignSelf:'center',
    borderRadius: 25, 
    flex: 4, 
    width: 400, 
    height: 400,
    marginTop:10
  }
});