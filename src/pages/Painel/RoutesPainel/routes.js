import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';

import Usage from './../Usage';
import Recharge from './../Recharge';
import Modem from './../Modem';
import Profile from './../Profile';


const Tab = createBottomTabNavigator();


export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Usage" component={Usage}
                options={{
                    tabBarLabel: 'Home',
                    TabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Recharge" component={Recharge} />
            <Tab.Screen name="Modem" component={Modem} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
