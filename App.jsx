import React from 'react';

/* Screens */
import WelcomeScreen from './routes/WelcomeScreen';
import LoginScreen from './routes/LoginScreen';

/* Plugins */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

export default function App() {
    const [loaded] = Font.useFonts({
        Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
        Karla: require('./assets/fonts/Karla-Bold.ttf'),
        KleeOne: require('./assets/fonts/KleeOne-SemiBold.ttf')
    });

    if (!loaded) {
        return null;
    }

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{
                        title: 'Welcome to Hain.co',
                        headerStyle: {
                            backgroundColor: '#CC9767',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'light',
                        },
                    }}
                />

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        title: 'Login to Hain.co',
                        headerStyle: {
                            backgroundColor: '#CC9767',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'light',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
