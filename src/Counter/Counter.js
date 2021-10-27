import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { useSelector } from "react-redux";


const Counter = () => {
    // const [count, setCount] = useState(0)

    // const Increase = () => setCount(count+1)

    // const Decrease = () => setCount(count-1)

    const count = useSelector((state) => state.counter.count)

    // const Reset = () => count

    return(
        <View style={styles.counterContainer}>
            <Text style={styles.title}>{count}</Text>
            {/* <Button title="+" color="green" onPress={ } /> */}
            {/* <Button title="-" color="red" onPress={ } /> */}
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