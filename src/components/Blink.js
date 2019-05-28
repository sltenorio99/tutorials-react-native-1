import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
  }

  componentDidMount() {
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText
      }));
    }, 1000);
  }

  render() {
    const { isShowingText } = this.state;
    const { text } = this.props;

    return isShowingText && <Text style={styles.text}>{text}</Text>;
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I am a blinking text" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
});
