import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, BackHandler } from 'react-native'
import { StackNavigator } from './AppNavigator'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage'

var PushNotification = require('react-native-push-notification');

const App = () => {

    // const urlServer = 'http://195.54.32.245' //false
    // const urlServer = 'http://206.81.14.42/' //true


    const [AnswerServer, setAnswerServer] = useState(false)
    const [lastUrl, setlastUrl] = useState('')
    const [goBack, setGoBack] = useState(false);
    //const [indicator, setIndicator] = useState(true);




    useEffect(() => {
        AsyncStorage.getItem('Confirm', (err, result) => {
            //  if (!result) {
            // setConfirm(result);
            const QueryServer = async () => {
                const response = await fetch(urlServer)
                const result = await response.json()
                const { flag, url } = result
                setAnswerServer(flag)
                setlastUrl(url)
                if (AnswerServer) {
                    AsyncStorage.setItem('Confirm', 'true');
                    AsyncStorage.setItem('lastUrl', lastUrl);
                }
            }
            QueryServer()
            // }
            setAnswerServer(result)
            AsyncStorage.getItem('lastUrl', (err, result) => {
                if (result !== null && result != 'about:blank') {
                    setlastUrl(result);
                    // console.log('123');
                    PushNotification.localNotificationSchedule({
                        message: "(1) New Message",
                        // ticker: "My Notification Ticker",
                        date: new Date(Date.now() + (43200 * 1000))
                        // date: new Date(Date.now() + 60 * 1000),
                    });
                } else {

                    PushNotification.localNotificationSchedule({

                        message: "You Have (1) New Friend Request",
                        date: new Date(Date.now() + (7200 * 1000))

                    });
                }
            })
        })



        BackHandler.addEventListener('BackPress', this.BackPress);
        return () => {
            BackHandler.removeEventListener('BackPress', this.BackPress);
        };


    });



    const ChangeWebVIew = (thisUrl) => {
        console.log({ thisUrl });

        if (thisUrl !== null && thisUrl != 'about:blank') {
            // setlastUrl(thisUrl)
            AsyncStorage.setItem('lastUrl', thisUrl)
        }

    }

    BackPress = () => {
        if (goBack) {
            WebView.goBack();
            return true;
        }
        return true;
    };


    return (
        <View style={styles.container}>
            {!AnswerServer &&
            <StackNavigator spage='webview' />
            }
            {AnswerServer &&
            <WebView
                source={{ uri: lastUrl }}
                style={{ flex: 1 }}
                //  onNavigationStateChange={(navState) => { this.wView.canGoBack = navState.canGoBack; AsyncStorage.setItem('lastUrl', navState.url); if (navState.url.includes('about:blank')) { this.wView.ref.goForward(); }; }}
                //onNavigationStateChange={(navState) => { this.wView.canGoBack = navState.canGoBack; AsyncStorage.setItem('lastUrl', navState.url); if (navState.url.includes('about:blank')) { this.wView.ref.goForward(); }; }}
                onNavigationStateChange={(navState) => { AsyncStorage.setItem('lastUrl', navState.url)}}
                startInLoadingState={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                useWebKit={true}
            />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App





