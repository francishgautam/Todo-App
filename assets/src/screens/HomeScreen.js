import React, { useState } from "react";
import { Text, View, FlatList } from "react-navigation";

const HomeScreen = () => {
  const [list, setList] = useState([]);
  return (
    <View>
      <text>This is the date</text>
      <FlatList data={list} onPress={() => {}} />
    </View>
  );
};
