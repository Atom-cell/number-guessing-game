import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Main from "./components/Main";
import FinalScreen from "./components/FinalScreen";

export default function App() {
  const [main, setMain] = React.useState(false);

  const showMain = () => {
    setMain(false);
  };

  if (main === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to the Number Guessing Game!</Text>
        <Pressable onPress={() => setMain(true)} style={styles.btn}>
          <Text style={styles.txt}> START GAME</Text>
        </Pressable>
      </View>
    );
  } else if (main) {
    return (
      <View style={styles.container}>
        <Main showMain={showMain} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  txt: { fontSize: 30, textAlign: "center" },
  btn: {
    backgroundColor: "#F2583E",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50,
  },
});
