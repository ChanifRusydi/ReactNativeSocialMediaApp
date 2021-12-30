import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
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
        <View style={{flex: 1, padding: 10,backgroundColor:'red'}}>
            {data.map((item, index) => (
                <TouchableOpacity onPress={() => navigation.navigate('Post', {}
                )} key={index}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default PostList;