import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const CoinItem = ({coinData}) => {

    const { name, 
            current_price, 
            market_cap_rank, 
            price_change_percentage_24h, 
            symbol, 
            market_cap, 
            image 
    } = coinData;

    const percentageColor = price_change_percentage_24h < 0 ? 'salmon' : 'lightgreen';
    const caretSymbol = price_change_percentage_24h < 0 ? 'caret-down' : 'caret-up';

    const processMarketCap = (market_cap) => {
        
        if ( market_cap > 1_000_000_000_000 ) {
            return `${Math.floor(market_cap / 1_000_000_000_000)} T`
        }

        if ( market_cap > 1_000_000_000 ) {
            return `${Math.floor(market_cap / 1_000_000_000)} B`
        }
        if ( market_cap > 1_000_000 ) {
            return `${Math.floor(market_cap / 1_000_000)} M`
        }
        if ( market_cap > 1_000 ) {
            return `${Math.floor(market_cap / 1_000)} K`
        }

        return market_cap;
    }

    return (

        <View style={styles.coinCOntainer} >

            <Image 
            source={{uri: image}}
            style={{width: 35, height: 35, margin: 10}}
            />

            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.raw}>{market_cap_rank}</Text>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <Icon name={caretSymbol} size={20} color={percentageColor} style={{alignSelf: 'center', marginRight: 7}} />
                    <Text style={styles.text}>{price_change_percentage_24h.toFixed(3)}%</Text>
                </View>
            </View>

            <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
                <Text style={styles.title}>{current_price}</Text>
                {/* <View style={{flexDirection: 'row'}}> */}
                    <Text style={styles.text}>MCap {processMarketCap(market_cap)}</Text>
                {/* </View> */}
            </View>

        </View>
        
    )

}

const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    text: {
      color: 'white',
      marginRight: 5,
      fontSize: 15
    },
    raw: {
      color: 'white',
      backgroundColor: 'black',
      paddingHorizontal: 8,
      marginRight: 4,
      borderRadius: 4
    },
    coinCOntainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      borderBottomWidth: 0.6,
      borderColor: 'lightgray',
    }
  });