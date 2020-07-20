import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
//import { Screen2 } from '../'


const PressYes = (navigation) => {
    navigation.navigate('SCREEN_8')
}


const Screen7 = ({ navigation }) => {
    const { container, bgrArea, btnView, testStyle, footer } = styles
    return (
        <View style={container}  >
            <ImageBackground source={require('../../img/bg.png')} style={styles.image}>
                <View style={bgrArea}>
                    <Text style={testStyle}>Do you want to go to the theater for plays?</Text>
                    <View style={btnView}>
                        <Button title="No" onPress={() => PressYes(navigation)}  />
                        <Button title="Yes" onPress={() => PressYes(navigation)} />
                    </View>
                </View>
                <Text style={footer}>Privacy Policy</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    bgrArea: {
        justifyContent: 'space-around',
        opacity: 0.9,
        borderRadius: 15,
        height: 200,
        width: 300,
        backgroundColor: 'white'
    },
    btnView: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    testStyle: {
        fontSize: 20,
        fontFamily: 'Cochin',
        textAlign: 'center',
        margin: 20,
    },
    footer: {

        color: "#ddc3a9",
        fontSize: 18,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 10,
    }
})


export { Screen7 }



