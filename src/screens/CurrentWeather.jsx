import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';


import RowText from "../components/RowText";
import { weatherType } from "../utility/weatherType";



const CurrentWeather = () => {
  const { CurrentWeatherer, container, temp, feels, highLowWrCurrentWeatherer, highLow, desc, message, bodyCurrentWeatherer } = styles;

  return (
    <SafeAreaView style={CurrentWeatherer}>

      <View style={container}>

        <Feather
          name="sun"
          size={70}
          color='black'
        />

        <Text>Current Weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          message1={`High: 8`}
          message2={`Low: 6`}
          containerStyles={highLowWrCurrentWeatherer}
          message1Styles={highLow}
          message2Styles={highLow}
        />

      </View>

      <RowText
        message1={`Its sunny`}
        message2={weatherType['Drizzle'].message}
        message1Styles={desc}
        message2Styles={message}
        containerStyles={bodyCurrentWeatherer}
      />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  CurrentWeatherer: {
    backgroundColor: 'pink',
    // marginTop: StatusBar.currentHeight,
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
    marginHorizontal: 10
  },
  bodyCurrentWeatherer: {
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
