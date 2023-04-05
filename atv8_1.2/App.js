import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {

  const [numeros, setNumeros] =useState([
    { numero: 'One', key: 0 },
    { numero: 'Two', key: 1 },
    { numero: 'Three', key: 2 },
    { numero: 'Four', key: 3 },
    { numero: 'Five', key: 4 },
    { numero: 'Six', key: 5 },
    { numero: 'Seven', key: 6 },
    { numero: 'Eight', key: 7 },
    { numero: 'Nine', key: 8 },
    { numero: 'Ten', key: 9 },
    { numero: 'Eleven', key: 10 },
    { numero: 'Twelve', key: 11 },
    { numero: 'Thirteen', key: 12 },
    { numero: 'Fourteen', key: 13 },
    { numero: 'Fifteen', key: 14 },
  ])

  return (

    <FlatList contentContainerStyle={styles.container}
      numColumns={3}
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
    paddingTop: 45,
    color: 'white',
    backgroundColor: '#16afca',
    fontSize: 15,
    marginHorizontal: 4,
    marginVertical: 4,
    width: 100,
    height: 100,
  },
  
});
