import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    Button
} from 'react-native';
import { Styles, Layout } from "./Styles";

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={Styles.container}>
            {/*Image Container*/}
            {/*TODO @hazel add image style to Styles.jsx*/}
            <View style={Layout.imageContainer}>
                <Image
                    style={Styles.logo}
                    source={require(
                        '../assets/logo.png'
                    )}
                />
            </View>
            {/*Title Container*/}
            {/*DONE  @hazel larger title text*/}
            {/*DONE @hazel change font to Questrial (gfonts)*/}
            <View  style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={Styles.title}>
                    Hain.co
                </Text>
            </View>
            {/*Tagline Container*/}
            {/*DONE @hazel smaller tagline text*/}
            {/*DONE @hazel change font to WorkSans (gfonts)*/}
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
                    {/*TODO @hazel change color of button?*/}
                    {/*TODO @brylle add button action*/}
                    <Button
                        title={"Register"}
                        color={"#CC9767"}
                        style={
                            [
                                Styles.buttonText,
                                Layout.buttonSize
                            ]
                        }
                    />
                    <View style={Layout.verticalSpacing}/>
                    <Button
                        title={"Login"}
                        color={"#CC9767"}
                        style={
                            [
                                Styles.buttonText,
                                Layout.buttonSize
                            ]
                        }
                    />
                    {/* brylle pakihiwalay na sa ibang functions yung mga press actions */}
                </View>
            </View>
        </SafeAreaView>
    );
}
