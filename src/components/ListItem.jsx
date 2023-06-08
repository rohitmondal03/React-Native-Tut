import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import { Feather } from "@expo/vector-icons"


const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp } = styles;

    return (
        <View style={item}>
            <Feather
                name='sun'
                size={50}
                color={'white'}
            />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 10,
        marginHorizontal: 2,
    },
    date: {
        fontSize: 12,
        color: 'white',
        marginHorizontal: 5
    },
})


export default Item;
