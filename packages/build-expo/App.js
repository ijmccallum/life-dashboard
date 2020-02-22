import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import UI Lib
import UISetup from '@life-dashboard/ui-lib';

//pass it expo primitives
const UI = UISetup({ViewPrimitive: View, TextPrimitive: Text});

//provide the initialised lib to the app-root component
export default function App() {
  return (
    <UI.View style={styles.container}>
      <UI.Text>Open up App.js to start working on your app!</UI.Text>
    </UI.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
