import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from "./components/WelcomeScreen";
import * as Font from 'expo-font';
import {Styles} from "./components/Styles";

export default function App() {
    const [loaded] = Font.useFonts({
        Questrial: require('./assets/fonts/Questrial.ttf'),
        WorkSans: require('./assets/fonts/WorkSans.ttf'),
        KleeOneRegular: require('./assets/fonts/KleeOne-Regular.ttf'),
        KleeOneSemiBold: require('./assets/fonts/KleeOne-SemiBold.ttf'),
        Lobster: require('./assets/fonts/Lobster-Regular.ttf')
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
