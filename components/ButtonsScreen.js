import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from '../App';

export default function ButtonScreen({ navigation }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <PaperProvider>
      <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
        <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button}>
          Log in
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('AddToCart')} style={styles.button}>
          Add to Cart
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('RequestAgent')} style={styles.button}>
          Request an agent
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={styles.button}>
          Sign Up
        </Button>
        <Button mode="contained" onPress={() => setTheme('light')} style={styles.button}>
          Light Mode
        </Button>
        <Button mode="contained" onPress={() => setTheme('dark')} style={styles.button}>
          Dark Mode
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  button: {
    marginVertical: 8,
    width: '80%',
  },
});
