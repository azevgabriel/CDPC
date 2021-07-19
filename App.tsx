import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Login } from './src/screen/Login';

// import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
