import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
