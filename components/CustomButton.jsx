import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Styles, Layout } from './Styles'

export default function CustomButton(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={onPress}
            activeOpacity={0.2}
        >
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
