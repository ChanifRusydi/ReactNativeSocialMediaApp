import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native';

export const LogIn =() => {
        return(
        <SafeAreaView>
            <Text>LogIn</Text>
            <Text>Doesnt have account yet?</Text>
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
    
export default LogIn;