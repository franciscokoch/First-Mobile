import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { theme } from "../../themes/theme"
import { Icon } from "../components/Icon"
import { useState } from "react";
import { ILogin } from "../@types/login";
import axios from "axios";
import { ILoginRet } from "../@types/loginRet";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../@types/navigation";

axios.defaults.baseURL = 'https://dummyjson.com';

export const Login = () => {

    const navigation = useNavigation<NavigationProps>();
    const [login, setLogin] = useState<ILogin>(
        {
            username: '',
            password: ''
        }
    );
    const [loading, setLoading] = useState(false);

    const doLogin = async () => {
        if(login.username?.length <= 0) {
            Alert.alert('Informe seu usuário!')
            return;
        }
        if(login.password?.length <= 0) {
            Alert.alert('Informe sua senha!')
            return;
        }

    const { data } = await axios
        .post<ILoginRet>('/auth/login', login)
        .catch(err => {
            Alert.alert('Ops', 'Credenciais inválidas')
            return { data: null } as { data: ILoginRet | null };
        })

    if (data) {
        console.log('Token:', data.accessToken);
        console.log('User ID:', data.id);
        
        navigation.reset({
            routes: [
                {
                    name: 'Home'
                }
            ], index: 0
        });
    }
    
}

    return (
        <View style={[theme.container]}>
            <Icon name='lock' />
            <Text>Login Screen</Text>

            <TextInput
                style={[theme.input, theme.marginTop]}
                placeholder='E-mail'
                value={login.username}
                onChangeText={text => setLogin({...login, username: text })}
            />

            <TextInput
                style={[theme.input, theme.marginBottom]}
                placeholder='Password'
                secureTextEntry
                value={login.password}
                onChangeText={text => setLogin({...login, password: text })}
            />

            {loading ? <ActivityIndicator size='large' /> :
                <TouchableOpacity
                    style={theme.button}
                    onPress={() => doLogin()}>
                        <Text style={theme.textButton}>Login</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}