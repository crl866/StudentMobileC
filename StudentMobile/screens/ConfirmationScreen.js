import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ route, navigation }) {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Confirmation Details</Text>

      <Text style={styles.text}>Student ID: {student.student_id}</Text>
      <Text style={styles.text}>Full Name: {student.full_name}</Text>
      <Text style={styles.text}>Course: {student.course}</Text>
      <Text style={styles.text}>Year Level: {student.year_level}</Text>
      <Text style={styles.text}>Date Registered: {student.date_registered}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
