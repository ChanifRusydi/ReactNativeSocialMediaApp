import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'

export const Login = ({ navigation }) => {
    return (
        
            <SafeAreaView style={styles.container}>
            
            {/* <Image style={{ width: 150, height: 50, marginLeft: 100, marginBottom: 20 }} source={require('./images/logo.png')} /> */}
            <TextInput placeholder="Phone number, username or email address" style={styles.formInput} />
            <TextInput placeholder="Password" style={styles.formInput} />
            

            <View styles={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PostList')} >
            <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPw')} >
            <Text style={{color: 'blue', alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginTop: 10, }}>Forgotten your password?</Text>
            </TouchableOpacity>

            <View style={{padding: 30, flexDirection:'row', justifyContent: 'center', marginLeft: 20}}>
                <Text style={{fontSize: 17}}>
                    Dont have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color:'blue', fontSize: 17}}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
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
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
    },

   buttonText: {
       color: 'white',
   },

    
    button: {
        backgroundColor: 'blue',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        

    }
});
export default Login;