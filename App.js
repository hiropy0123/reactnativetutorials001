import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://scontent-nrt1-1.cdninstagram.com/vp/1d456cb6b9625ecfa8170c1fc1bf5a0b/5C30C14C/t51.2885-15/e35/26865946_104106253742309_7876223594202660864_n.jpg'
    };

    return (
      <View style={styles.container}>
        <Greeting name='Hiroki' />
        <Text>My First React Native App!</Text>
        <Image source={pic} style={{width: 386, height: 220}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
