import React from "react";
import {View, StyleSheet} from "react-native";
import Counter from "./src/Counter/Counter";
import { Provider } from 'react-redux';
import { store } from "./src/Store/Store";

const App = () => {
  return(
    <Provider store={store}>
    <View style={styles.Container}>
      <Counter />
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1
  }
 
});

export default App;
