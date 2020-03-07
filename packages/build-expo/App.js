import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//native UI components passed into the UISetup lib...
// import UISetup from '@life-dashboard/ui-lib';
// const UI = UISetup({ViewPrimitive: View, TextPrimitive: Text});

import AppRoot from './appRoot.js';

export default function App() {
  return (
    <AppRoot/>
    // <AppRoot UI={UI}/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
