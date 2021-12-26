import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native';


const LogOut =() => {
    return(
    <SafeAreaView>
        <Text>LogOut</Text>
        <Text>Do you want to log out?</Text>
        <Button title='Log Out'></Button>
    </SafeAreaView>

    );  
}

export default LogOut;