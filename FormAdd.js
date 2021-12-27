import * as React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, Button, Image, TextInput,StyleSheet} from 'react-native';

export const FormAdd = ({ route,navigation }) => {
    const[username, setUsername] = useState('');
    cosnt[textInputPost, setTextInputPost] = useState('')

    const saveData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    text: textInputPost
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setData(json.data);
        }catch(error){
            console.log(error);
        }finally{
            navigation.navigate
        }

        return (
            <View style={{flex:1, padding:4, backgroundColor:'black'}}>
                <Text style={{color:'white'}}>{item.userId}</Text>
                <TextInput placeholder='tulis post anda'  style={StyleSheet.input} onChangeText={(text) => setTextInputPost(text)}/>

        )
    
    
    
const styles = StyleSheet.create({
    input: {
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

export default FormAdd;