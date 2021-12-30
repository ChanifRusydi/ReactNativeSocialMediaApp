import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostList as PostListTab} from './PostList';
import { Search as SearchTab} from './SearchScreen';
import { Notifications as NotificationTab} from './NotificationsScreen';
import { Profile as ProfileTab} from './ProfileScreen';

const Tab = createBottomTabNavigator();
const AppHome = () => {
    return (  
        <NavigationContainer>
            <Tab.Navigator initialRouteName>
                <Tab.Screen name="Home" component={PostListTab} />
                <Tab.Screen name="Search" component={SearchTab} />
                <Tab.Screen name="Notifications" component={NotificationsTab} />
                <Tab.Screen name="Profile" component={ProfileTab} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
export default AppHome;