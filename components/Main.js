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
import ShowModal from "./Modal";
export default function Main({ showMain }) {
  const [top, setTop] = React.useState([0, 1, 5, 0, "", 0]); //score, round, tries remaining, hints taken,modal message, correct guesses
  let [number, setNumber] = React.useState(""); //input number
  const [guess, setGuess] = React.useState(0); //guess number
  const [done, setDone] = React.useState(false); //done btn
  const [modal, setModal] = React.useState(false); //modal

  React.useEffect(() => {
    setGuess(Math.floor(Math.random() * 50));
  }, []);
  React.useEffect(() => {
    if (top[2] == 0) {
      let a = [...top];
      a[1] = a[1] + 1;
      a[2] = 5;
      a[4] = `Correct guess was ${guess}`;
      setModal(true);
      setTop(a);
      changeGuessNumber();
    }
  });

  const changeGuessNumber = () => {
    setGuess(Math.floor(Math.random() * 50));
  };

  const showInput = (n) => {
    setNumber(number + n);
  };

  const guessCheck = () => {
    if (top[2] >= 1 && number !== "") {
      if (number == guess) {
        let a = [...top];
        a[0] = a[0] + 10;
        a[1] = a[1] + 1;
        a[2] = 5;
        a[4] = "Correct Guess";
        a[5] = a[5] + 1;
        setNumber("");
        setTop(a);
        changeGuessNumber();
        setModal(true);
      } else {
        let a = [...top];
        a[2] = a[2] - 1;
        // a[1] = a[1] + 1;
        a[4] = "Wrong Guess";
        setTop(a);
        setModal(true);
      }
    }
  };

  const deleteInput = () => {
    let a = number.substr(0, number.length - 1);
    setNumber((number) => a);
  };

  const takeHint = () => {
    if (number !== "") {
      let a = [...top];
      a[0] = a[0] - 2;
      a[3] = a[3] + 1;
      if (number > guess) {
        a[4] = "Guess lower";
      } else {
        a[4] = "Guess Higher";
      }
      setTop(a);
      setModal(true);
    }
  };

  const hideModal = () => {
    setModal(false);
  };
  const playAgain = () => {
    setDone(false);
    setTop([0, 1, 5, 0, "", 0]);
    changeGuessNumber();
    setNumber("");
  };
  if (done === false) {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 20 }}>
          {/* <Text style={{ fontSize: 27 }}>{guess}</Text> */}
          <Text style={styles.statsText}>Score: {top[0]}</Text>
          <Text style={styles.statsText}>Round Number: {top[1]} </Text>
          <Text style={styles.statsText}>Number of tries: {top[2]} </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Text
            style={{
              fontSize: 34,
              marginRight: 70,
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {number}
          </Text>
          <TouchableOpacity
            onPress={() => deleteInput()}
            style={{ position: "absolute", right: 65 }}
          >
            <Image
              source={require("../assets/ios-backspace-3-512.png")}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <Buttons
          showInput={showInput}
          guessCheck={guessCheck}
          takeHint={takeHint}
        />
        <Pressable style={{ marginBottom: -40 }} onPress={() => setDone(true)}>
          <Text style={styles.btn}>DONE</Text>
        </Pressable>
        {modal ? <ShowModal hideModal={hideModal} msg={top[4]} /> : null}
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
    // marginHorizontal: 10,
    marginVertical: 10,
  },
  btn: {
    fontSize: 24,
    backgroundColor: "#BB86FC",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50,
    fontFamily: "monospace",
  },
  statsText: {
    fontSize: 27,
    fontFamily: "monospace",
  },
});
