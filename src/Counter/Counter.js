import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';


const Counter = () => {
    const [count, setCount] = useState(0)

    const Increase = () => setCount(count+1)

    const Decrease = () => setCount(count-1)

    const Reset = () => setCount(0)

    return(
        <View style={styles.counterContainer}>
            <Text style={styles.title}>{count}</Text>
            <Button title="+" color="green" onPress={() => Increase()} />
            <Button title="-" color="red" onPress={() => Decrease()} />
            <Button title="Reset"  onPress={() => Reset()} />
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:24
    },

    title:{
        fontSize:24,
        marginVertical:10,
        textAlign:"center"
    }
})

export default Counter;