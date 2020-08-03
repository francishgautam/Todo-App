import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={style.title}> This is the header </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
  },
  title: {
    textAlign: "right",
  },
});

export default Header;
