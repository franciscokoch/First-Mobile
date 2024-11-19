import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { theme } from "../../themes/theme";
import { useEffect, useState } from "react";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');

    const [todoList, setTodoList] = useState<string[]>([]);

    const save = (text: string) => {
        
        const newList = [...todoList, text];

        setTodoList(newList);
        setInput('');
    }

    useEffect(() => {
        console.log('INPUT', input)
    }, [input])

    return (
        <SafeAreaView style={theme.container}>
            <TextInput
            style={theme.input}
            value={input}
            onChangeText={(value) => setInput(value)}
            onSubmitEditing={() => save(input)}
            />
            <Text style={theme.textTitle}>Lista de tarefas:</Text>
            {todoList.map((tarefa, index) => (
                <Text
                style={theme.listItem}
                key={index}>{tarefa}</Text>
            ))}
        </SafeAreaView>
    )
}