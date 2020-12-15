import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const alpha = require('alphavantage')({ key: 'qweqweqwe' });

export default function App() {
  const [state, setState] = useState({
    stockSymbol: '',
    today: 0,
    delta: 0,
    percentage: 0
  });

  function getData() {
    var stock = state.stockSymbol;
    var newHistorical = {'Meta Data': {'3. Last Refreshed': '0000-00-00'}};
    var timeSeries = {};

    alpha.data.daily(stock).then(data => {
      newHistorical = data;
      timeSeries = data['Time Series (Daily)'];

      const keys = Object.keys(timeSeries);

      const today = timeSeries[keys[0]]['4. close'];
      const yesterday = timeSeries[keys[1]]['4. close'];

      const delta = today - yesterday;
      const percentage = (delta / yesterday) * 100;

      setState({...state, today: today, delta: delta, percentage: percentage});
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.container_h1}>Acompanhar ação</Text>

      <Text style={styles.container_h2}>Ação a ser seguida:</Text>
      <TextInput style={styles.input} onChange={e => setState({...state, stockSymbol: e.target.value})} />

      <TouchableOpacity style={styles.button} onPress={() => getData()}>Buscar</TouchableOpacity>

      <Text style={styles.container_h2}>Valor:</Text>
      <View style={styles.line}>
        <Text style={styles.container_h4}>{state.today} USD</Text>
        {state.delta > 0 ?
        <Text style={styles.container_h5_green}>+{state.delta.toFixed(2)} ({state.percentage.toFixed(2)}%) ↑</Text> :
        <Text style={styles.container_h5_red}>{state.delta.toFixed(2)} ({state.percentage.toFixed(2)}%) ↓</Text>}
      </View>
    </View>
  );
}
