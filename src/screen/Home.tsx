import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Account } from "./Account";
import Contador from "./Contador";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {

    const navigator = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>
            <FontAwesome6 name="house" size={40} color="black"/>
            Home
            </Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => {navigator.navigate(Account)}}
          >
            <Text style={styles.buttonText}>
              <FontAwesome name="birthday-cake" size={24} color="white" />
                Ir para conta
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() => {navigator.navigate(Contador)}}
          >
            <Text style={styles.buttonText}>Ir para contador</Text>
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
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
    button: {
      backgroundColor: '#0080ff',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });