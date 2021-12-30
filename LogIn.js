import React from 'react';
import { Text, Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const LogIn =() => {
        return(
        <SafeAreaView>
            <Text style={styles.text}>LogIn</Text>
            <TextInput style={styles.input} placeholder='Email or Username' />
            <TextInput style={styles.input} placeholder='Password' />
            <Text style={styles.text}>Doesnt have account yet?</Text>
            <Button title='Register'></Button>
        </SafeAreaView>
        );
}
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }

    // handleUserChange = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     });
    // }

    // handlePassChange = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // }

    // handleLogin = (event) => {
    //     event.preventDefault();
    //     this.props.handleLogin(this.state.username, this.state.password);
    // }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default LogIn;