import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    TextInput, // dont forget to lagay yung border
} from 'react-native';
import { Styles, Layout } from '../components/Styles';
import CustomButton from '../components/CustomButton';

export default function LoginScreen() {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={{marginTop: '40%'}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10
                }}>
                    <Image
                        style={{
                            width: 80,
                            height: 80,
                            marginRight: 10
                        }}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={[
                        {marginTop: 12},
                        Styles.title
                    ]}>
                        Login
                    </Text>
                </View>
            </View>
            <View style={Layout.verticalSpacing}/>
            <View style={{
                marginTop: 20,
                marginLeft: 90
            }}>
                <Text style={{fontFamily: 'KleeOne'}}>
                    Student Number:
                </Text>
            </View>
            <View style={{
                alignItems:'center',
                marginTop: 5
            }}>
                <TextInput
                    placeholder={'Enter Student Number'}
                    style={[
                        Styles.textInput,
                        {paddingLeft: 10}
                    ]}
                />
            </View>
                <View style={Layout.verticalSpacing}/>
                <View style={{
                    marginTop: 5,
                    marginLeft: 90
                }}>
                    <Text style={{fontFamily: 'KleeOne'}}>
                        Password:
                    </Text>
                </View>
            <View style={{
                alignItems: 'center',
                marginTop: 5
            }}>
                <TextInput
                    placeholder={'Enter Password'}
                    style={[
                        Styles.textInput,
                        {paddingLeft: 10}
                    ]}
                    secureTextEntry={true}
                />
            </View>
            <View style={Layout.verticalSpacing}/>
            <View style={[
                Layout.buttonAlignment,
                {marginTop: '13%'}
            ]}>
                <View style={Layout.buttonSize}>
                    <CustomButton
                        title={"Login"}
                        onPress={() => alert('Login Succesfully!')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
