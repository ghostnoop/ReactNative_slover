import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { 
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6,
    Screen7,
    Screen8,
    Screen9,
    Screen10,
    Screen11,
    Screen12,
    Screen13,
    Screen14,
    Screen15,
    ScreenWebView
} from './screens'


const Stack = createStackNavigator();

const StackNavigator = () => {
    //console.log({Stack.Navigator});
    
    return (
        <NavigationContainer>            
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SCREEN_1'>                       
                <Stack.Screen name="WEB_VIEW" component={ScreenWebView} /> 
                <Stack.Screen name="SCREEN_1" component={Screen1} />
                <Stack.Screen name="SCREEN_2" component={Screen2} />
                <Stack.Screen name="SCREEN_3" component={Screen3} />
                <Stack.Screen name="SCREEN_4" component={Screen4} />
                <Stack.Screen name="SCREEN_5" component={Screen5} />
                <Stack.Screen name="SCREEN_6" component={Screen6} />
                <Stack.Screen name="SCREEN_7" component={Screen7} />
                <Stack.Screen name="SCREEN_8" component={Screen8} />
                <Stack.Screen name="SCREEN_9" component={Screen9} />
                <Stack.Screen name="SCREEN_10" component={Screen10} />
                <Stack.Screen name="SCREEN_11" component={Screen11} />
                <Stack.Screen name="SCREEN_12" component={Screen12} /> 
                <Stack.Screen name="SCREEN_13" component={Screen13} /> 
                <Stack.Screen name="SCREEN_14" component={Screen14} /> 
                <Stack.Screen name="SCREEN_15" component={Screen15} />     
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { StackNavigator }
