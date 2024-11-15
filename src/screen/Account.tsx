import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IUser } from "../@types/user";

export const Account = () => {
    const [user, setUser] = useState<IUser>({
        name: "Chico",
        age: 19,
        city: "Lajeado"
    } as IUser)

    useEffect(() => {
        console.log('IDADE NOVA =>', user.age)
    }, [user.age]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textTitle}>Account Information</Text>
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Age: {user.age}</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => setUser({...user, age: user.age + 1})}>
                    <Text style={styles.textButton}>Make aniversary!!!</Text>
                </TouchableOpacity>
            <View style={styles.containerBack}>
              <TouchableOpacity style={styles.backButton}>
                <Text>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton}>
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 40
    },
    button: {
      backgroundColor: '#0080ff',
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
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        lineHeight: 24,
        letterSpacing: -0.2
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerBack: {
        padding: 20,
        borderRadius: 10,
        width: '80%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        gap: 25,
        marginBottom: 20,
        marginTop: 20
    },
    backButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});