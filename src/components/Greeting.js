import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "black" }}>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Shane" />
        <Greeting name="Seung Seung" />
        <Greeting name="Bryan" />
      </View>
    );
  }
}
