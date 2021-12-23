import * as React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, Button,Image} from 'react-native';

export const FormAdd = ({ routte,navigation }) => {
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
        }
        