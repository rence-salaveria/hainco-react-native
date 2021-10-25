import React from 'react';
import { Pressable, Text } from "react-native";
import { Styles } from "./Styles";

function CustomButton(props) {
    const { buttonText, pressAction } = props
    return (
        <Pressable style={[Styles.buttonStyle, Styles.buttonText]} onPress={pressAction}>
            <Text>{buttonText}</Text>
        </Pressable>
    )
}

export default CustomButton;
