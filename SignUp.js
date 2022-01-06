import React from 'react';
import { StyleSheet, Text, SafeAreaView,View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const { width, height } = Dimensions.get('window');

   
export const SignUp = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSignUp = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* <TextInput placeholder="Mobile number" style={styles.formInput} /> */}
            {/* <TextInput placeholder="Full Name" placeholderstyle style={styles.formInput} /> */}
            <TextInput placeholder="Email" style={styles.formInput} value={email} onChangeText={setEmail} />
            {/* <TextInput placeholder="Username" style={styles.formInput} /> */}
            <TextInput placeholder="Password" style={styles.formInput} value={password} onChangeText={setPassword}/>
        
            <View styles={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onSignUp} >
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