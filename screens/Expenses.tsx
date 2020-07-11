import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Expenses: React.FunctionComponent = () => {
  const navigation = useNavigation()
  
  const onButtonPressed = React.useCallback(() => {
    navigation.navigate('ExpenseDetails', {
      id: 1010
    })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Expenses Screen</Text>
      <Button
        title="Go to Details"
        onPress={onButtonPressed}
      />
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

export default Expenses
