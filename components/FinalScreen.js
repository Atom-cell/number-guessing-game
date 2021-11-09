import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FinalScreen = ({ stats, showMain, playAgain }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.statsText}>Score: {stats[0]}</Text>
          <Text style={styles.statsText}>
            Total Correct Guesses: {stats[5]}
          </Text>
          <Text style={styles.statsText}>Rounds Played: {stats[1] - 1}</Text>
          <Text style={styles.statsText}>Tries Remaining: {stats[2]}</Text>
          <Text style={styles.statsText}>Hints taken: {stats[3]}</Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Pressable style={styles.btn} onPress={() => playAgain()}>
          <Text style={styles.txt}>PLAY AGAIN</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => showMain()}>
          <Text style={styles.txt}>FINISH</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  txt: { fontSize: 30, textAlign: "center", fontFamily: "monospace" },
  btn: {
    backgroundColor: "#BB86FC",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginVertical: 10,
  },
  statsText: {
    fontSize: 22,
    fontFamily: "monospace",
    marginBottom: 7,
  },
});
