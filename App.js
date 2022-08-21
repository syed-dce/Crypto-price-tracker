/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { CoinItem } from './src/components/CoinItem';
import cryptocurrencies from './assets/data/cryptocurrencies.json';
import Home from './src/screens/Home';
import CoinDetailsScreen from './src/screens/CoinDetailsScreen';

const App: () => Node = () => {

  return (
    <SafeAreaView >
      <View style={styles.appContainer}>
        {/* <Home /> */}
        <CoinDetailsScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    // backgroundColor: 'dimgray',
    backgroundColor: '#3f3f3f',
    height: '100%',
    width: '100%',
    padding: 10,
  }
});

export default App;
