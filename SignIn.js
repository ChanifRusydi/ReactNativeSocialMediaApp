import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {AppHome as Home} from './SocialMediaApp';
import { PostList as PostListTab }  from './PostList';
import { Dimensions } from 'react-native';
import { auth } from '../firebase';
import { getUser } from 'firebase/auth';
const { width, height } = Dimensions.get('window');

export const Login = ({ navigation }) => {
    return (
        
            <SafeAreaView style={styles.container}>
            
            {/* <Image style={{ width: 150, height: 50, marginLeft: 100, marginBottom: 20 }} source={require('./images/logo.png')} /> */}
            <TextInput placeholder="Phone number, username or email address" style={styles.formInput} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" style={styles.formInput} value={password} onChangeText={setPassword}/>
            

            <View styles={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate()} >
            <Text style={styles.buttonText}> Log In </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPw')} >
            <Text style={{color: 'blue', alignSelf: 'center', justifyContent: 'center', marginTop: 10, }}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={{padding: 10, flexDirection:'row', justifyContent: 'center', marginLeft: 20}}>
                <Text style={{fontSize: 17}}>
                    Doesn't have an account?  
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color:'blue', fontSize: 16, marginLeft:5}}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}

const stack = createNativeStackNavigator();
export const SignInStack = () => {
    const {email, setEmail} = React.useState('');
    const {password, setPassword} = React.useState('');
    return (
        <stack.Navigator>
            <stack.Screen name='Login' component={Login} />
            <stack.Screen name='Home' component={PostListTab} />
        </stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    formInput: {
        marginHorizontal: 20,
        height:50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
    },

    buttonText: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'white',
       alignSelf: 'center',
    },
    button: {
        width: width - 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        

    }
});
export default Login;