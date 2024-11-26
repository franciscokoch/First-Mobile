import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screen/Home';
import Contador from '../src/screen/Contador';
import { Account } from '../src/screen/Account';
import { ToDoList } from '../src/screen/Todolist';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ToDoList" component={ToDoList} />
            <Stack.Screen name="Contador" component={Contador} />
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    );
}