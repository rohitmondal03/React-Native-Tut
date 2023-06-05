import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';



const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrCurrentWeatherer}>

      <View style={styles.container}>
      
        <Feather
          name="sun"
          size={70}
          color='black'
        />

        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <View style={styles.highLowWrCurrentWeatherer}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>

      </View>

      <View style={styles.bodyWrCurrentWeatherer}>
        <Text style={styles.desc}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  wrCurrentWeatherer: {
    backgroundColor: 'pink',
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLowWrCurrentWeatherer: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrCurrentWeatherer: {
    justifyContent: "flex-end",
    alignContent: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  desc: {
    fontSize: 48,
    fontWeight: 500
  },
  message: {
    fontSize: 20,
  }
})


export default CurrentWeather;
