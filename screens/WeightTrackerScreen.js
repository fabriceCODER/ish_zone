import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function WeightTrackerScreen() {
  const [weights, setWeights] = useState([100, 90, 70, 69, 68, 67, 66]);
  const [newWeight, setNewWeight] = useState('');

  const addWeight = () => {
    setWeights([...weights, parseFloat(newWeight)]);
    setNewWeight('');
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [{ data: weights }],
        }}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
      <TextInput
        placeholder="Enter weight"
        value={newWeight}
        onChangeText={setNewWeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Weight" onPress={addWeight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, marginVertical: 10, padding: 8 },
});
