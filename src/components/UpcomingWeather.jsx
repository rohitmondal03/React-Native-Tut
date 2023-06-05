import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, StatusBar, FlatList } from 'react-native';
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
      <Text style={{ color: 'white' }}>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item => item.dt_txt)}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 20 || 0,
    backgroundColor: 'red',

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
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
  }
})



export default UpcomingWeather;