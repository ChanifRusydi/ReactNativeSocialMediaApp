import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


const Stack = createNativeStackNavigator();
const AppHome = () => {
    return (  
        <NavigationContainer>
            <Stack.Navigator initialRouteName>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default AppHome;