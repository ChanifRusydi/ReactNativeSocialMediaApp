import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import {Login as SignInScreen } from './SignIn';
import {SignUp as SignUpScreen} from './SignUp';


const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.welcome}>Welcome To Social Media App</Text>
            <Button title='Log In' onPress={() => navigation.navigate('SignIn')} />
            <Button title='Sign Up' onPress={() => navigation.navigate('SignUp')} />
        </SafeAreaView>
    );
}
const stack = createNativeStackNavigator();

const WelcomeStack = () => {
    return (
     <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
            <stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
            <stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    welcome:  {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    button: {
        backgroundColor: '#20F4C4'
    }
});
export default WelcomeStack;

