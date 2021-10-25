import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from "./components/WelcomeScreen";
import * as Font from 'expo-font';
import {Styles} from "./components/Styles";

export default function App() {
    const [loaded] = Font.useFonts({
        Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
        Karla: require('./assets/fonts/Karla-Bold.ttf'),
        KleeOne: require('./assets/fonts/KleeOne-SemiBold.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <WelcomeScreen/>
        </View>
    );
}
