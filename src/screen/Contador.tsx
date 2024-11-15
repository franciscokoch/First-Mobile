import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Account } from './Account';

export default function Contador() {

  const navigator = useNavigation();

  const [count, setCount] = useState<number>(0);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Contador: {count}</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => {navigator.navigate(Account)}}
        >
          <Text style={styles.buttonText}>Ir para conta</Text>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
    </SafeAreaView>
  );
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
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});