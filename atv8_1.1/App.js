import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {

  const [numeros, setNumeros] =useState([
    { numero: '0', key: 0 },
    { numero: '1', key: 1 },
    { numero: '2', key: 2 },
    { numero: '3', key: 3 },
    { numero: '4', key: 4 },
    { numero: '5', key: 5 },
    { numero: '6', key: 6 },
    { numero: '7', key: 7 },
    { numero: '8', key: 8 },
    { numero: '9', key: 9 },
  ])

  return (
    
    <FlatList contentContainerStyle={styles.container}
      numColumns={2}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity> 
          <Text style={styles.item}> {item.numero}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  item: {
    textAlign: 'center',
    padding: 50,
    color: 'white',
    backgroundColor: 'green',
    fontSize: 25,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 150,
  },
  
});
