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

import { CoinItem } from '../../components/CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import CoinInfo from '../../../assets/data/crypto.json';
import CoinDetailsHeader from '../../components/CoinDetailsHeader/CoinDetailsHeader';

 const CoinDetailsScreen: () => Node = () => {


    const { image: { small }, 
            name, 
            symbol,
            market_data: {market_cap_rank, current_price, price_change_percentage_24h},
        } = CoinInfo;
 

    const percentageColor = price_change_percentage_24h < 0 ? 'salmon' : 'lightgreen';
    const caretSymbol = price_change_percentage_24h < 0 ? 'caret-down' : 'caret-up';
    

   return (

        <>
            <CoinDetailsHeader 
                                image={small} 
                                name={name}  
                                symbol={symbol} 
                                marketCapRank={market_cap_rank}  
            />

            <View style={styles.subHeaderContainer}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.currentPrice}>${current_price.usd}</Text>
                </View>
                <View style={styles.priceChangeContainer}>
                <Icon name={caretSymbol} size={20} color='white' style={{alignSelf: 'center', marginRight: 7}} />
                    <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(5)}%</Text>
                </View>
            </View>
        </>

   );
 };
 
 const styles = StyleSheet.create({
    currentPrice: {
        color: 'white', 
        fontSize: 30, 
        fontWeight: 'bold'
    },
    name: {
        color: 'white',
        fontWeight: 'bold'
    },
    priceChange: {
        color: 'white',
        fontWeight: 'bold'
    },
    priceChangeContainer: {
        backgroundColor: 'tomato',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        paddingVertical: 10
    },
    subHeaderContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
 
 });
 
 export default CoinDetailsScreen;
 