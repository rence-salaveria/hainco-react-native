import {StatusBar, StyleSheet, Platform} from "react-native";

export const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.current,
        ...Platform.select({
            ios: {
                backgroundColor: '#f5f5dc',
                width: '100%',
                height: '100%'
            },
            android: {
                backgroundColor: '#f5f5dc',
                width: '100%',
                height: '100%'
            },
            default: {
                backgroundColor:'#f5f5dc',
                width: '100%',
                height: '150%'
            }
        })
    },
    getStartedButton: {
        backgroundColor: '#F0EFEB'
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        margin: 50,
        marginTop: 140,
        marginBottom: 15
    },
    title: {
        fontFamily: 'Lobster',
        fontSize: 40,
        color: '#8B4411'
    },
    subtitle: {
        fontFamily: 'KleeOneSemiBold',
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 50
    },
    buttonText: {
        fontFamily: 'KleeOneSemiBold'
    },
    buttonStyle: {
        borderRadius: 5
    }
});

export const Layout = StyleSheet.create({
    verticalSpacing: {
        height: 10
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonAlignment: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    /* removed due to refactoring towards Pressable */
    buttonSize: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%'
    }
})
