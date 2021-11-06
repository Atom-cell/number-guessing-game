import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Buttons({ setGuessNumber, guessCheck }) {
  return (
    <View style={styles.container}>
      <View style={styles.r1}>
        <Pressable onPress={() => setGuessNumber("1")} style={styles.btn}>
          <Text style={styles.txt}>1</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("2")} style={styles.btn}>
          <Text style={styles.txt}>2</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("3")} style={styles.btn}>
          <Text style={styles.txt}>3</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => setGuessNumber("4")} style={styles.btn}>
          <Text style={styles.txt}>4</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("5")} style={styles.btn}>
          <Text style={styles.txt}>5</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("6")} style={styles.btn}>
          <Text style={styles.txt}>6</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => setGuessNumber("7")} style={styles.btn}>
          <Text style={styles.txt}>7</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("8")} style={styles.btn}>
          <Text style={styles.txt}>8</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("9")} style={styles.btn}>
          <Text style={styles.txt}>9</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => guessCheck()} style={styles.btn}>
          <Text style={styles.txt}>GUESS</Text>
        </Pressable>
        <Pressable onPress={() => setGuessNumber("0")} style={styles.btn}>
          <Text style={styles.txt}>0</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.txt}>HINT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginVertical: 20,
  },
  r1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 8,
    width: "29%",
    backgroundColor: "#D5E1DD",
    borderRadius: 50,
  },
  txt: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
