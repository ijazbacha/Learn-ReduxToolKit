import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";


const Counter = () => {
    // const [count, setCount] = useState(0)

    // const Increase = () => setCount(count+1)

    // const Decrease = () => setCount(count-1)

    const count = useSelector((state) => state.counter.count)

    const dispatch = useDispatch()


    return(
        <View style={styles.counterContainer}>
            <Text style={styles.title}>{count}</Text>
            <Button title="+" color="green" onPress={ () =>  {dispatch(increment())} } />
            <Button title="-" color="red" onPress={ () =>  {dispatch(decrement())} } />
            <Button title="incrementBy 10" color="gray" onPress={ () =>  {dispatch(incrementByAmount(10))} } />
            <Button title="Reset"  onPress={ () => { dispatch(reset()) }} />
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