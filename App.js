import React from "react";
import {View, StyleSheet} from "react-native";
import Counter from "./src/Counter/Counter";

const App = () => {
  return(
    <View style={styles.Container}>
      <Counter />
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1
  }
 
});

export default App;
