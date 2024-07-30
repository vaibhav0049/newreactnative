import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ThemeContext } from '../App';

const data = [
  { key: 'Appointments' },
  { key: 'Trips' },
  { key: 'Passwords' },
  { key: 'Pitches' },
  { key: 'Updates' },
];

export default function ListsScreen() {
  const { theme } = useContext(ThemeContext);

  const handlePress = (item) => {
    Alert.alert(`Pressed: ${item.key}`);
  };

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={[styles.item, theme === 'dark' && styles.darkText]}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  darkText: {
    color: '#fff',
  },
});
