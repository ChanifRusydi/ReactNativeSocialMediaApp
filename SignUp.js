import React from 'react'
import { StyleSheet, Text, SafeAreaView,View, TouchableOpacity, TextInput, Button } from 'react-native'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

   
export const SignUp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <TextInput placeholder="Mobile number or email address" style={styles.formInput} />
            <TextInput placeholder="Full Name" placeholderstyle style={styles.formInput} />
            <TextInput placeholder="Username" style={styles.formInput} />
            <TextInput placeholder="Password" style={styles.formInput} />
        
            <View styles={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.buttonText}> Register </Text>
                </TouchableOpacity>
            </View>
           {/* <Button title="Back to Welcome Screen" onPress={() => navigation.goBack()} /> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },

    formInput: {
        marginHorizontal: 20,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button: {
        width: width - 40,
        backgroundColor: 'blue',
        borderRadius: 15,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    placeholdertext: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
})
export default SignUp;