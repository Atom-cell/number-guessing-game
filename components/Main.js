import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Buttons from "./Buttons";

export default function Main() {
  const [top, setTop] = React.useState([0, 0]);
  let [number, setNumber] = React.useState("");
  const [guess, setGuess] = React.useState(0);

  React.useEffect(() => {
    setGuess(Math.floor(Math.random() * 100));
  }, []);

  const setGuessNumber = (n) => {
    setNumber(number + n);
  };

  const guessCheck = () => {
    console.warn("guessing");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 27 }}>Score: 1234</Text>
        <Text style={{ fontSize: 27 }}>Round Number: 44 </Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ fontSize: 27 }}> {number}</Text>
        <Text> Delete wala icon</Text>
      </View>
      <Buttons setGuessNumber={setGuessNumber} guessCheck={guessCheck} />
      <Pressable style={{ marginBottom: -40 }}>
        <Text style={styles.btn}>DONE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "50%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btn: {
    fontSize: 24,
    backgroundColor: "#F2583E",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50,
  },
});
