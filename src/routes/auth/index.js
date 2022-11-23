import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import AppNavigation from '../main';

const Stack = createNativeStackNavigator()

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='app' component={AppNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter