import * as React from 'react';
import { useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';

export const PostDetail = ({route, navigation}) => {
    const [itemId] = route.params
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})


    const [username, setUsername] = useState('')
    const [postDate, setPostDate] = useState('')
    const [postText, setPostText] = useState('')

    const getData = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
            const json = await response.json()
            setData(json)
            setUsername(json.userId)
            setPostDate(json.title)
            setPostText(json.body)
            setIsLoading(false)
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }


    const deleteData = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
                method: 'DELETE'
            })
            const json = await response.json()
            setData(json)
            navigation.goBack()
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }
    ,[])
    return (
        <SafeAreaView>
            <View style={{flex:1 padding:4, backgroundColor:'black'}}>
                {data.map(item => (
                    <View style={{flex:1, padding:4, backgroundColor:'black'}}>
                        <Text style={{color:'white'}}>{item.userId}</Text>
            </View>