import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TEST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121433",
  },
  text: {
    color: "#fff",
  },
});
