import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import {LogIn as LogInScreen} from './LogIn';
import {Register as RegisterScreen} from './Register';


const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome To our Social Media App</Text>
            <Button title='Log In' onPress={() => navigation.navigate('LogIn')} />
            <Button title='Sign Up' onPress={() => navigation.navigate('Register')} />
        </SafeAreaView>
    );
}
const stack = createNativeStackNavigator();

const WelcomeStack = () => {
    return (
     <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
            <stack.Screen name='LogIn' component={LogInScreen} options={{ headerShown: false }} />
            <stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    welcome:  {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    button: {
        backgroundColor: '#20F4C4'
    }
});
export default WelcomeStack;

