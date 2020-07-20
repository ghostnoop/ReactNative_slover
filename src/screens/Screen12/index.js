import React, {useEffect, useState} from 'react';
import {
    Component,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import construct from '@babel/runtime/helpers/esm/construct';


const Screen12 = ({navigation}) => {
    const {container, textstyle, viewstyle, bgrArea, btntoch, signtext, nextstyle, datestyle, iconstyle, footer} = styles;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
            enabled={Platform.OS === 'ios' ? true : false}>

            <ImageBackground source={require('../../img/bg_blur.png')} style={styles.image}>
                <Text style={{
                    color: 'white',
                    flex: 1,
                    width: '100%',
                    textAlign: 'left',
                    top: 35,
                    paddingLeft: 40,
                    fontSize: 16,
                }}>Sign Up</Text>

                <View style={[viewstyle, {top: 40, paddingLeft: 40, paddingRight: 40}]}>
                    <Text style={[textstyle, {fontSize: 20}]}>Thank you!</Text>
                    <Text style={[textstyle, {fontSize: 14, marginTop: 5}]}>We will contact you shortly
                    </Text>

                </View>
                <View style={{position: 'absolute', top: 350, flex: 1, flexDirection: 'column'}}>

                    <Image source={require('../../img/logo.png')}
                           style={{resizeMode: 'contain', width: 150, alignContent: 'center'}}>
                    </Image>

                </View>


            </ImageBackground>

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
    btntoch: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 2,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        width: '90%',
        alignItems: 'center',
    },
    signtext: {
        color: '#ff3636',
        paddingTop: 16,
        paddingLeft: 120,
        paddingRight: 120,
        paddingBottom: 20,
        borderRadius: 30,
        backgroundColor: '#ff3636',
    },
    textstyle: {
        color: 'white',
        flex: 1,
        width: '100%',
        textAlign: 'left',
        top: 35,
    },
    viewstyle: {
        position: 'absolute',
        top: 90,
        width: '100%',

        textAlign: 'center',

    },
    bgrArea: {
        justifyContent: 'space-around',
        opacity: 0.9,
        borderRadius: 15,
        height: 200,
        width: 300,
        backgroundColor: 'white',
    },
    nextstyle: {
        position: 'absolute',
        bottom: 38,
    },
    datestyle: {
        color: 'white',
        fontSize: 16,
    },
    iconstyle: {
        color: 'white',
        fontSize: 15,
    },
    footer: {

        color: '#ddc3a9',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
    },
});


export {Screen12};



