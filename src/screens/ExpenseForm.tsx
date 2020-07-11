import { useRoute, RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { RootStackParamList } from '../../App'

type ExpenseFormScreenRouteProp = RouteProp<RootStackParamList, 'ExpenseForm'>

export default function ExpenseForm () {
  const route = useRoute<ExpenseFormScreenRouteProp>()
  const isCreate = route.params.isCreate

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        mode="outlined"
        label="Item"
        placeholder="Item name"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Price"
        placeholder="Item price"
        keyboardType="decimal-pad"
        style={styles.input}
      />
      <Button
        mode="contained"
        contentStyle={{ padding: 8 }}
      >
        {isCreate ? 'Add' : 'Update'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});
