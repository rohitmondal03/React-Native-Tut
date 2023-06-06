import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, StatusBar, FlatList, ImageBackground } from 'react-native';
import { Feather } from "@expo/vector-icons"


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



const Item = (props) => {
  const { dt_txt, min, max, condition } = props;

  return (
    <View style={styles.item}>
      <Feather
        name='sun'
        size={50}
        color={'white'}
      />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}




const UpcomingWeather = () => {

  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.min}
      max={item.main.max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-bg.jpg')}
        style={styles.image}
      >
      <Text style={styles.heading}>Upcoming Weather</Text>
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
  image: {
    flex: 1,
  }
})



export default UpcomingWeather;