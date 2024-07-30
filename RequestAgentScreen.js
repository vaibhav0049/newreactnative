import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Card, Title, Paragraph, Provider as PaperProvider } from 'react-native-paper';

export default function RequestAgentScreen() {
  const handleRequestAgent = () => {
    Alert.alert('Request an agent');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
          <Card.Content>
            <Title>Agent Service</Title>
            <Paragraph>Contact an agent for more information</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleRequestAgent} style={styles.button}>
              Request an Agent
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
