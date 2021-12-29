import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import { Text,TextInput,StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Register = () => {
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.textregister}>Register</Text>
            <TextInput style={styles.textinput} placeholderTextColor='blue' placeholder="Username"/>
            <TextInput style={styles.textinput} placeholder="Password" />
            <TextInput style={styles.textinput} placeholder="Confirm Password" />
            <TextInput style={styles.textinput} placeholder="Email" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    textregister: {
        fontSize: 30,
        ...Platform.select({
        android: {
           fontFamily: 'sans-serif-medium',
         },
        ios: {
            fontFamily: 'AppleSDGothicNeo-Bold',
        },
        default: {
        // other platforms, web for example
           fontFamily: 'Arial',
        },
        }),
        marginBottom: height/4,
    },
    textinput: {
        width: width - 60,
        height: height/15,
        borderColor: 'black',
        borderWidth: 2,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 20,
    },
    placeholderstyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'blue',
        marginBottom: 10,
    }
});
export default Register;