import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IUser } from "../@types/user";
import { theme } from "../../themes/theme";

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
        <SafeAreaView style={theme.container}>
            <Text style={theme.textTitle}>Account Information</Text>
            <Text style={theme.text}>Name: {user.name}</Text>
            <Text style={theme.text}>Age: {user.age}</Text>
            <TouchableOpacity style={theme.button}
                onPress={() => setUser({...user, age: user.age + 1})}>
                    <Text style={theme.textButton}>Make aniversary!!!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}