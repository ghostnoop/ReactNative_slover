import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage'



const ScreenWebView = ({ navigation }) => {
    const [lastUrl, setlastUrl] = useState('')
    const [Confirm, setConfirm] = useState('')
   // setwvUrl('https://www.exponent.com')


    useEffect(() => {
        AsyncStorage.getItem('lastUrl', (err, result) => {
            if (result !== null && result != 'about:blank') {
                setlastUrl( result );
            } 
        })
        AsyncStorage.getItem('Confirm', (err, result) => {
            if (result) {
                setConfirm(result);
            }
        })
    });

    return (
        
        <View style={styles.container} >
            <Text>LastUrl: {lastUrl}</Text>
            <Text>Confirm: {Confirm}</Text>
            <Button title='Confirm true' onPress={() => { 
                AsyncStorage.setItem('Confirm', 'true'); 
                AsyncStorage.setItem('lastUrl', 'https://www.google.com');
                }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "column"
    },

})


export { ScreenWebView }



