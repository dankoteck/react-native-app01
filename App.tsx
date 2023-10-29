import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type Typography = {
  content: string;
};

const data: Typography = {
  content: "Hello World 2!",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{data.content}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
