import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Modal, Image } from "react-native";

const ShowModal = ({ hideModal, msg }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible);
                hideModal();
              }}
            >
              <Image
                source={require("../assets/icons8-close-window-96.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: 200,
                }}
              />
              <Text style={styles.modalText}>{msg}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: 300,
    height: 300,
    position: "absolute",
    bottom: "20%",
    left: "11%",
    // flex: 0.7,
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 1,
    //   height: 4,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 4,
    elevation: 15,
  },
  //   button: {
  //     borderRadius: 20,
  //     paddingHorizontal: 25,
  //     paddingVertical: 10,
  //     elevation: 2,
  //   },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#F2583E",
    padding: 30,
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center",
  },
});

export default ShowModal;
