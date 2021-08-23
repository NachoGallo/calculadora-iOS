import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calculadora from './src/screens/Calculadora';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#161616" />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
