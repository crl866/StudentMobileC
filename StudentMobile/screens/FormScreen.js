import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormScreen({ navigation }) {
  const [student, setStudent] = useState({
    student_id: '',
    full_name: '',
    course: '',
    year_level: '',
    date_registered: ''
  });

  const handleChange = (field, value) => {
    setStudent({ ...student, [field]: value });
  };

  const handleSubmit = () => {
    navigation.navigate('Confirmation', { student });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={student.student_id}
        onChangeText={(text) => handleChange('student_id', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={student.full_name}
        onChangeText={(text) => handleChange('full_name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={student.course}
        onChangeText={(text) => handleChange('course', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Year Level"
        value={student.year_level}
        onChangeText={(text) => handleChange('year_level', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Date Registered (YYYY-MM-DD)"
        value={student.date_registered}
        onChangeText={(text) => handleChange('date_registered', text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
