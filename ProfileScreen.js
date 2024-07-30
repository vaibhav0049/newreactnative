import React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList } from 'react-native';

const data = [
  { name: 'John Smith', points: -164 },
  { name: 'Sarah Parker', points: 203 },
  { name: 'Paul Allen', points: 464 },
  { name: 'Terry Andrews', points: -80 },
  { name: 'Andy Vitale', points: -230 },
  { name: 'Katy Friedson', points: 160 },
];

export default function ProfileScreen({ navigation }) {
  const handlePress = (action) => {
    navigation.navigate('UserDetails', { action });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/image20-vmake.png')} />
      <Text style={styles.name}>Paul Allen</Text>
      <Button title="View Profile" onPress={() => handlePress('view')} />
      <View style={styles.spacer} />
      <Button title="Add User" onPress={() => handlePress('add')} color="green" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text style={{ color: item.points >= 0 ? 'green' : 'red' }}>{item.points}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    marginVertical: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  spacer: {
    height: 10,
  },
});
