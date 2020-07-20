import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';
//import { Screen2 } from '../'

//login screen
const LOGIN = (navigation) => {
    navigation.navigate('SCREEN_4');
};
const SIGNUP = (navigation) => {
    navigation.navigate('SCREEN_1');
};


const Screen2 = ({navigation}) => {
    const {container, bgrArea, btnView, signupstyle, signtext, loginstyle, testStyle, logotext, inputtext, footer} = styles;
    return (
        <KeyboardAvoidingView
            style={styles.container}

            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
            enabled={Platform.OS === 'ios' ? true : false}>
            {/*<SafeAreaView  style={container}>*/}
            <ImageBackground source={require('../../img/bg_logo.png')} style={styles.image}>
                {/*<View style={{position: 'absolute', top: 0}}>*/}
                {/*    <Image source={require('../../img/logo.png')} style={{resizeMode: 'contain', width: 150}}>*/}
                {/*    </Image>*/}
                {/*    <Text style={logotext}>*/}
                {/*        Date, Chat & Meet*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <View style={{width: '100%', alignItems: 'center',height:'37%'}}>

                    <TextInput
                        style={{
                            flex:0,
                            top:0,
                            paddingLeft: 10,
                            width: '78%',
                            borderColor: 'white',
                            borderWidth: 2,
                            color: 'white',
                            fontStyle: 'italic',
                            fontFamily: 'Open Sans',
                            fontSize:16
                        }}
                        placeholder="Email"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={{
                            paddingLeft: 10,
                            width: '78%',
                            borderColor: 'white',
                            borderWidth: 2,
                            color: 'white',
                            fontStyle: 'italic',
                            fontFamily: 'Open Sans',
                            marginTop:20,
                            fontSize:16
                        }}
                        placeholder="Password"
                        placeholderTextColor="white"
                    >

                    </TextInput>

                </View>

                <View style={signupstyle}>
                    <TouchableOpacity style={signtext} onPress={() => LOGIN(navigation)}>
                        <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={loginstyle}>
                    <TouchableOpacity color='transparent' onPress={() => SIGNUP(navigation)}>
                        <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/*</SafeAreaView >*/}

        </KeyboardAvoidingView>
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
    logotext: {
        position: 'absolute',
        top: 120,
        alignContent: 'space-around',
        fontSize: 16,
        color: 'white',
        lineHeight: 26,
        fontFamily: 'lucida grande',
        justifyContent: 'center',
        width: '100%',
    },
    inputext: {},
    signtext: {
        color: '#ff3636',
        paddingTop: 19,
        paddingLeft: 93,
        paddingRight: 93,
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


export {Screen2};



