import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostList as PostListScreen } from './PostList';

const Tab = createBottomTabNavigator();
const AppHome = () => {
    return (  
        <NavigationContainer>
            <Tab.Navigator initialRouteName>
                <Tab.Screen name="Home" component={PostListScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
export default AppHome;