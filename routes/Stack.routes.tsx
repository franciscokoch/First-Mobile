import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screen/Home';
import Contador from '../src/screen/Contador';
import { Account } from '../src/screen/Account';
import { ToDoList } from '../src/screen/Todolist';
import { Login } from '../src/screen/Login';
import { Cep } from '../src/screen/Cep';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ToDoList" component={ToDoList} />
            <Stack.Screen name="Contador" component={Contador} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Cep" component={Cep} />
        </Stack.Navigator>
    );
}