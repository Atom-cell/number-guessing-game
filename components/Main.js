import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Buttons from "./Buttons";
import FinalScreen from "./FinalScreen";

export default function Main({ showMain }) {
  const [top, setTop] = React.useState([0, 1, 5, 0]); //score, round, tries remaining, hints taken
  let [number, setNumber] = React.useState("");
  const [guess, setGuess] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setGuess(Math.floor(Math.random() * 100));
  }, []);

  const changeGuessNumber = () => {
    setGuess(Math.floor(Math.random() * 100));
  };

  const showInput = (n) => {
    setNumber(number + n);
  };

  const guessCheck = () => {
    if (top[2] >= 1) {
      if (number == guess) {
        // alert("correct guess");
        let a = [...top];
        a[0] = a[0] + 10;
        a[1] = a[1] + 1;
        setNumber("");
        setTop(a);
        changeGuessNumber();
      } else {
        let a = [...top];
        a[2] = a[2] - 1;
        setTop(a);
      }
    }
  };

  const deleteInput = () => {
    let a = number.substr(0, number.length - 1);
    setNumber((number) => a);
  };

  const takeHint = () => {};

  const playAgain = () => {
    setDone(false);
    setTop([0, 1, 5, 0]);
    changeGuessNumber();
  };
  if (done === false) {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 27 }}>{guess}</Text>
          <Text style={{ fontSize: 27 }}>Score: {top[0]}</Text>
          <Text style={{ fontSize: 27 }}>Round Number: {top[1]} </Text>
          <Text style={{ fontSize: 27 }}>Number of tries: {top[2]} </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={{ fontSize: 34, marginRight: 70 }}>{number}</Text>
          <TouchableOpacity onPress={() => deleteInput()}>
            <Image
              source={require("../assets/ios-backspace-3-512.png")}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <Buttons showInput={showInput} guessCheck={guessCheck} />
        <Pressable style={{ marginBottom: -40 }} onPress={() => setDone(true)}>
          <Text style={styles.btn}>DONE</Text>
        </Pressable>
      </View>
    );
  } else if (done === true) {
    return (
      <FinalScreen stats={top} showMain={showMain} playAgain={playAgain} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "100%",
    // paddingHorizontal: 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
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
