import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Contador() {
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
    paddingBottom: 40,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});