import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image} from 'react-native';
//import { Screen2 } from '../'


const SIGNUP = (navigation) => {
    navigation.navigate('SCREEN_3');
};

const LOGIN = (navigation) => {
    navigation.navigate('SCREEN_2');
};


const Screen1 = ({navigation}) => {
    const {container, bgrArea, btnView, signupstyle, signtext, loginstyle, testStyle, footer} = styles;
    return (
        <View style={container}>


            <ImageBackground source={require('../../img/bg_logo.png')} style={styles.image}>

                <View style={signupstyle}>
                    <TouchableOpacity style={signtext} onPress={() => SIGNUP(navigation)}>
                        <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto'}}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={loginstyle}>
                    <TouchableOpacity color='transparent' onPress={() => LOGIN(navigation)}>
                        <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 2,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 2,
    },
    signtext: {
        color: '#ff3636',
        paddingTop: 19,
        paddingLeft: 64,
        paddingRight: 64,
        paddingBottom: 20,
        borderRadius: 30,
        backgroundColor: '#ff3636',
    },

    bgrArea: {
        justifyContent: 'space-around',
        opacity: 0.9,
        borderRadius: 15,
        height: 200,
        width: 300,
        backgroundColor: 'white',
    },
    signupstyle: {
        position: 'absolute',
        bottom: 91,
    },
    loginstyle: {
        position: 'absolute',
        bottom: 39,
    },
    btnView: {
        position: 'absolute',
        bottom: 39,
    },
    testStyle: {
        fontSize: 20,
        fontFamily: 'Cochin',
        textAlign: 'center',
        margin: 20,
    },
    footer: {

        color: '#ddc3a9',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
    },
});


export {Screen1};



