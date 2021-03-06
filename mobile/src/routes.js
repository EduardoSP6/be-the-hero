import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator sreenOptions={{ headerShown: false }}>
                <AppStack.Screen component={Incidents} name="Incidents" />
                <AppStack.Screen component={Detail} name="Detail" />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}