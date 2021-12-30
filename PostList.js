import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';

export const PostList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    
    const getData = async () => {
        try{
            const response = await fetch('');
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
        <SafeAreaView>
        <View style={styles.container}>
           <Text style={styles.text}>PostList Screen</Text>
        </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    }
});
export default PostList;