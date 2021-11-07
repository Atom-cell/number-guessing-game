import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FinalScreen = ({ stats, showMain, playAgain }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 27 }}>Score: {stats[0]}</Text>
          <Text style={{ fontSize: 27 }}>Rounds Played: {stats[1] - 1}</Text>
          <Text style={{ fontSize: 27 }}>Tries Remaining: {stats[2]}</Text>
          <Text style={{ fontSize: 27 }}>Hints taken: {stats[3]}</Text>
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
  txt: { fontSize: 30, textAlign: "center" },
  btn: {
    backgroundColor: "#F2583E",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginVertical: 10,
  },
});
