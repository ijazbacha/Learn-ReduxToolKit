import React from "react";
import { View, Text, Button} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../Counter/counterSlice";


const Cart = () => {
    const cartItem = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return(
        <View>
            <Text>{ cartItem }</Text>
            <Button title="remove" onPress={() => { dispatch(reset()) }} />
        </View>
    )
}

export default Cart;