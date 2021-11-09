import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Buttons({ showInput, guessCheck, takeHint }) {
  return (
    <View style={styles.container}>
      <View style={styles.r1}>
        <Pressable onPress={() => showInput("1")} style={styles.btn}>
          <Text style={styles.txt}>1</Text>
        </Pressable>
        <Pressable onPress={() => showInput("2")} style={styles.btn}>
          <Text style={styles.txt}>2</Text>
        </Pressable>
        <Pressable onPress={() => showInput("3")} style={styles.btn}>
          <Text style={styles.txt}>3</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => showInput("4")} style={styles.btn}>
          <Text style={styles.txt}>4</Text>
        </Pressable>
        <Pressable onPress={() => showInput("5")} style={styles.btn}>
          <Text style={styles.txt}>5</Text>
        </Pressable>
        <Pressable onPress={() => showInput("6")} style={styles.btn}>
          <Text style={styles.txt}>6</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => showInput("7")} style={styles.btn}>
          <Text style={styles.txt}>7</Text>
        </Pressable>
        <Pressable onPress={() => showInput("8")} style={styles.btn}>
          <Text style={styles.txt}>8</Text>
        </Pressable>
        <Pressable onPress={() => showInput("9")} style={styles.btn}>
          <Text style={styles.txt}>9</Text>
        </Pressable>
      </View>
      <View style={styles.r1}>
        <Pressable onPress={() => guessCheck()} style={styles.btn}>
          <Text style={styles.txt}>GUESS</Text>
        </Pressable>
        <Pressable onPress={() => showInput("0")} style={styles.btn}>
          <Text style={styles.txt}>0</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => takeHint()}>
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
    backgroundColor: "#03DAC5",
    borderRadius: 50,
    // #D5E1DD
  },
  txt: {
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
