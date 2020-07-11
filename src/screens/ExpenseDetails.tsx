import { useRoute, RouteProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../../App'

type ExpenseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ExpenseDetails'>

export default function ExpenseDetails () {
  const route = useRoute<ExpenseDetailsScreenRouteProp>()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{`Expense Details ${route.params.id} Screen`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
