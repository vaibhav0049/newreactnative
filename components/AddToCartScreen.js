import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Card, Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';

export default function AddToCartScreen() {
  const handleAddToCart = () => {
    Alert.alert('Added to Cart');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
          <Card.Content>
            <Title>Product Name</Title>
            <Paragraph>Product Description</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleAddToCart} style={styles.button}>
              Add to Cart
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: '100%',
  },
});
