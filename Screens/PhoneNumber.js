import React, { useState, useRef } from "react";
import { View, Text, Alert, StyleSheet, Pressable, Image } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);

  //No Press event to get phone number
  const buttonPress = () => {
    Alert.alert(phoneNumber);
    navigation.navigate("OTPcode");
  };
  // console.log("PhoneNumber:", phoneNumber);

  return (
    <View style={styles.container}>
      <View style={styles.topCon}>
        <View style={{ marginBottom: 50 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Enter Phone Number
          </Text>
        </View>

        <View style={{ marginBottom: 60 }}>
          <Text style={{ textAlign: "center" }}>
            Please enter your mobile number. We'll send you a verification code
            by SMS.
          </Text>
        </View>
      </View>
      {/* Inputing the Phone Number */}
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="LK"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />

      {/* onPress envent to get the phone Number */}
      <Pressable style={styles.button} onPress={() => buttonPress()}>
        <Text style={styles.btnsty}>Next</Text>
      </Pressable>
    </View>
  );
};

// <---------- Style Sheet ---------->

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  topCon: {
    width: "80%",
    alignItems: "center",
  },
  phoneContainer: {
    width: "75%",
    height: 50,
  },
  button: {
    marginTop: "25%",
    width: "60%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#70A0FA",
    borderRadius: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
  btnsty: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  stretch: {},
});

// <---------- End of Style Sheet ---------->

export default PhoneNumber;
