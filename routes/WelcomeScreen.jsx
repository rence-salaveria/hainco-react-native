import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
} from 'react-native';
import { Styles, Layout } from "../components/Styles";
import CustomButton from "../components/CustomButton";
import PressActions from "../components/PressActions";

export default function WelcomeScreen({navigation}) {
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
                        onPress={() => PressActions.register}
                    />
                    <View style={Layout.verticalSpacing}/>
                    <CustomButton
                        title={"Login"}
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
