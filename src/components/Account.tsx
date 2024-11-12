import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { User } from "../@types/user";

export const Account = () => {
    const [user, setUser] = useState<User>({} as User)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Account Information</Text>
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Age: {user.age}</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => setUser({...user, age: user.age + 1})}>
                    <Text>Make aniversary!!!</Text>
                </TouchableOpacity>
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
      paddingBottom: 40,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
});