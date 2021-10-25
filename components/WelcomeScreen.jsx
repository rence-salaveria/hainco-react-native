import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    Button
} from 'react-native';
import { Styles, Layout } from "./Styles";
import PressActions from "./PressActions";
import CustomButton from "./CustomButton";

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={Styles.container}>
            {/*Image Container*/}
            <View style={Layout.imageContainer}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>
            {/*Title Container*/}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={Styles.title}>
                    Hain.co
                </Text>
            </View>
            {/*Tagline Container*/}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={Styles.subtitle}>
                    Eat. Run.
                </Text>
            </View>
            {/*Button Container*/}
            <View style={Layout.verticalSpacing}/>
            <View style={Layout.buttonAlignment}>
                <View style={Layout.buttonSize}>
                    <CustomButton
                        title={"Register"}
                    />
                    <View style={Layout.verticalSpacing}/>
                    <CustomButton
                        title={"Login"}
                        onPress={PressActions.sayHello}
                    />
                    {/* brylle pakihiwalay na sa ibang functions yung mga press actions */}
                </View>
            </View>
        </SafeAreaView>
    );
}
