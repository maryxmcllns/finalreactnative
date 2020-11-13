import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  TextInput,
} from "react-native";

let total = 0;

export default function App() {
  const [nik, setnik] = useState("");
  const [dime, setdime] = useState("");
  const [quar, setquar] = useState("");
  const [loon, setloon] = useState("");
  const [toon, setoon] = useState("");
  const [five, setfive] = useState("");
  const [ten, setten] = useState("");
  const [twe, setwen] = useState("");
  const [fif, setfif] = useState("");
  const [hun, sethun] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            SAFE COUNTER
          </Text>
          <Text>Enter currency rolls(pieces):</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>&nbsp;&nbsp;5c X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setnik(text * 2)}
          />
          <Text style={styles.tstyle}> = {nik}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>10c X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setdime(text * 5)}
          />
          <Text style={styles.tstyle}> = {dime}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>25c X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setquar(text * 10)}
          />
          <Text style={styles.tstyle}> = {quar} </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>&nbsp;&nbsp;$1 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setloon(text * 25)}
          />
          <Text style={styles.tstyle}> = {loon}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>&nbsp;&nbsp;$2 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setoon(text * 50)}
          />
          <Text style={styles.tstyle}> = {toon}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>&nbsp;&nbsp;$5 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setfive(text * 5)}
          />
          <Text style={styles.tstyle}> = {five}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>$10 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setten(text * 10)}
          />
          <Text style={styles.tstyle}> = {ten}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>$20 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setwen(text * 20)}
          />
          <Text style={styles.tstyle}> = {twe}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>$50 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => setfif(text * 50)}
          />
          <Text style={styles.tstyle}> = {fif}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>$100 X</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={styles.textInput}
            onChangeText={(text) => sethun(text * 100)}
          />
          <Text style={styles.tstyle}> = {hun}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={styles.tstyle}>Loose Coins</Text>
          <TextInput keyboardType={"number-pad"} style={styles.textInput} />
          <Text style={styles.tstyle}>
            {" "}
            = {nik + dime + quar + loon + toon + five + ten + twe + fif + hun}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    width: 75,
  },
  tstyle: {
    padding: 5,
    margin: 5,
    fontSize: 20,
  },
});
