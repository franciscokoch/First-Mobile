import { StyleSheet } from "react-native";

export const colors = {
    blue: '#0080ff',
    blueLight: '#00ABFF',
    gray: '#333',
    white: '#fff',
    black: '#000',
    placeHolder: '#90A4AE',
    red: '#FF0000',
    green: '#00FF00'
}

export const theme = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingBottom: 40
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: colors.blue,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: -0.2
    },
    text: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray,
        textAlign: 'center',
        lineHeight: 24,
        letterSpacing: -0.2
    },
    tabel: {
        width: '80%',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    textButton: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.blue,
        backgroundColor: colors.blueLight,
        opacity: 0.5,
        width: '80%',
        fontSize: 16,
        letterSpacing: -0.2
    },
    listItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.blue
    },
    list: {
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.white,
        width: '100%'
    },
    textTask: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray,
        letterSpacing: -0.2
    },
    marginTop: {
        marginTop: 20
    },
    marginBottom: {
        marginBottom: 20
    }
})