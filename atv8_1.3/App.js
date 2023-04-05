import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [numeros, setNumeros] =useState([
    { numero: '', key: 0 },
    { numero: '', key: 1 },
    { numero: '', key: 2 },
    { numero: '', key: 3 },
    { numero: '', key: 4 },
    { numero: '', key: 5 },
  ])
  const [pessoas, setPessoas] =useState([
    { pessoa: '', key: 6 },
  ])

  return (
    <View style={styles.container}>
    <FlatList style={styles.container2}
      numColumns={2}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity> 
          <Text style={styles.item}> {item.numero}</Text>
        </TouchableOpacity>
      )}
    />

    <FlatList style={styles.container3}
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={pessoas}
      renderItem={({ item }) => (
        <TouchableOpacity> 
          <Text style={styles.item2}> {item.pessoa}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  );    
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  item: {
    padding: 60,
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
    marginVertical: 5,
    width: 80,
    height: 80,
  },

  item2: {
    padding: 60,
    backgroundColor: 'lightgray',
    width: 251,
    height: 80,
  },

  container2: {
    paddingTop: 95,
  },

  container3: {
    paddingBottom: 230,
  }
  
});
