import * as React from 'react';
import { useState } from 'react';
import {View, Text, Button, TextInput,StyleSheet, SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native'

const FormAdd = ({ route,navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const[username, setUsername] = useState('chanifrusydi');
    const[textInputPost, setTextInputPost] = useState('')

    const saveData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    text: textInputPost
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setData(json.data);
        }catch(error){
            console.log(error);
        }finally{
            navigation.navigate('PostList');
        }
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <Text style={{color:'white'}}>Post</Text>
            <TextInput placeholder='tulis post anda'  style={{
            alignSelf: 'center',
            width: windowWidth - 60,
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            fontSize: 18,
            color: 'black'}} onChangeText={(text) => setTextInputPost(text)}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button title='save' onPress={saveData}/>
                    <Button title='cancel' onPress={() => navigation.goBack()}/> 
            </View>
        </SafeAreaView>
    );
    const styles = StyleSheet.create({
        input:{
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            fontSize: 18,
            color: 'black'
        },
        button: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            fontSize: 18,
            color: 'black'
        }
    });
}
export default FormAdd;