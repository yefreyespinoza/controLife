import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
});
