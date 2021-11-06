import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Main from "./components/Main";

export default function App() {
  const [main, setMain] = React.useState(false);

  if (main === false) {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Number Guessing Game!</Text>
        <Pressable onPress={() => setMain(true)}>
          <Text>START GAME</Text>
        </Pressable>
      </View>
    );
  } else if (main) {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
