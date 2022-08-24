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
 
import { CoinItem } from '../CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import CoinInfo from '../../../assets/data/crypto.json';

 const CoinDetailsHeader = (props) => {


    const { image, 
            name, 
            symbol,
            marketCapRank,        
        } = props;
 
   return (

         <View style={styles.headerContainer}> 
                <Icon name='chevron-left' size={20} color='white' />

                <View style={styles.tickerContainer}>
                    <Image source={{uri: image}} style={{width: 20, height: 20}}/>
                    <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>

                    <View style={styles.rankContainer}>
                        <Text style={{color: 'white'}}>#{marketCapRank}</Text>
                    </View>
                </View>

                <Icon name='user-circle-o' size={20} color='white' />
         </View>

   );
 };
 
 const styles = StyleSheet.create({
    headerContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     // backgroundColor: 'dimgray',
     backgroundColor: '#3f3f3f',
     // height: '100%',   // parent view already has these
     // width: '100%',
     padding: 10,
     justifyContent: 'space-between'
   },
   tickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
   },
   tickerTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: 17
   },
   rankContainer: {
    // backgroundColor: '#585858',
    backgroundColor: 'black',
    paddingHorizontal: 6,
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 8
   }
 });
 
 export default CoinDetailsHeader;
 