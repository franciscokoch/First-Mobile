import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Contador from './src/components/Contador';
import { Account } from './src/components/Account';

export default function App() {
  return (
    <Account/>
  );
}