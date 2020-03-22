import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Tabs from './pages/Painel/RoutesPainel/routes';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <Stack.Screen name="Tabs" component={Tabs}/>
        </Stack.Navigator>
    );
}
