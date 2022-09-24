/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 // import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   FlatList,
   Dimensions
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

import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel, monotoneCubicInterpolation} 
            from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');

 const CoinDetailsScreen = () => {


    const { image: { small }, 
            name, 
            symbol,
            prices,
            market_data: {market_cap_rank, current_price, price_change_percentage_24h},
        } = CoinInfo;
 

    const percentageColor = price_change_percentage_24h < 0 ? 'salmon' : 'lightgreen';
    const caretSymbol = price_change_percentage_24h < 0 ? 'caret-down' : 'caret-up';
    

    const formatCurrency = (value) => {
        "worklet";

        if (value === "" ) {
            return `${current_price.usd.toFixed(2).toString()}`
        }

        return `${parseFloat(value).toFixed(2).toString()}`
    }

   return (

        <View>
        <ChartPathProvider data={{ points: prices.map((price) => ({x: price[0], y: price[1]}) ), smoothingStrategy: 'bezier' }}>
            <CoinDetailsHeader 
                                image={small} 
                                name={name}  
                                symbol={symbol} 
                                marketCapRank={market_cap_rank}  
            />

            <View style={styles.subHeaderContainer}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <ChartYLabel 
                        format={formatCurrency}
                        style={styles.currentPrice}
                    />
                    
                </View>
                <View style={styles.priceChangeContainer}>
                <Icon name={caretSymbol} size={20} color='white' style={{alignSelf: 'center', marginRight: 7}} />
                    <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(5)}%</Text>
                </View>
            </View>


            {/* <ChartPathProvider data={{ points: prices.map((price) => ({x: price[0], y: price[1]}) ), smoothingStrategy: 'bezier' }}> */}
                {/* <View> */}
                <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
                <ChartDot style={{ backgroundColor: 'red' }} />
                {/* </View> */}
            </ChartPathProvider>

        </View>

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
 