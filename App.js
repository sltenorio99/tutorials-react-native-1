import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Bananas from "./src/components/Bananas";
import LotsOfGreetings from "./src/components/Greeting";
import BlinkApp from "./src/components/Blink";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>Shane-Lewes Tenorio</Text>
        <LotsOfGreetings />
        <BlinkApp />
        <Bananas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
