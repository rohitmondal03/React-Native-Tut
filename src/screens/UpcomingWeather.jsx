import React from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList, ImageBackground } from 'react-native';


import ListItem from '../components/ListItem';


const DATA = [
  {
    "main": {
      "min": 292.84,
      "max": 294.94,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
    "dt_txt": "2022-08-30 18:00:00",
  },

  {
    "main": {
      "min": 292.84,
      "max": 294.94,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
    "dt_txt": "2022-08-30 15:00:00",
  },

  {
    "main": {
      "min": 292.84,
      "max": 294.94,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
    "dt_txt": "2022-08-30 09:00:00",
  },
]



const UpcomingWeather = () => {

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.min}
      max={item.main.max}
    />
  )

  const { container, image, heading } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-bg.jpg')}
        style={image}
      >
        <Text style={heading}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item => item.dt_txt)}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginVertical: 30
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalBlue',
  },
  image: {
    flex: 1,
  }
})



export default UpcomingWeather;