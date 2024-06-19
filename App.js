import React from 'react';
import { StyleSheet, View } from 'react-native';
import JobizzComponent from './LoginScreen'; // Adjust the path as necessary

export default function App() {
  return (
    <View style={styles.container}>
      <JobizzComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Change to flex-start to align with the top
    alignItems: 'flex-start', // Align items to the start to match left alignment
    backgroundColor: '#f7f0e8',
  },
});
