import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

export const PostList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    
    const getData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json.data);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return(
        <View style={{flex: 1, padding: 10,backgroundColor:'red'}} >
    )