import React from 'react'
import { Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground, View } from 'react-native'
import { Feather } from "@expo/vector-icons";


import IconText from '../components/IconText';


const City = () => {
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, reiseSetText, imageLayout, rowLayout } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-bg.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>

                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor='red'
                        bodyText={'8000'}
                        bodyTextStyles={populationText}
                    />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName='sunrise'
                        iconColor='white'
                        bodyText='10:45:33 AM'
                        bodyTextStyles={reiseSetText}
                    />

                    <IconText
                        iconName='sunset'
                        iconColor='white'
                        bodyText='17:30:10 PM'
                        bodyTextStyles={reiseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    reiseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})



export default City