import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Baham App</Text>
        <Text style={styles.description}>
          Welcome to the Baham App! Plan your journey, find routes, and track
          your transportation in real-time.
        </Text>
        <TouchableOpacity style={styles.button} 
          onPress={() => {navigation.navigate('Menu')}}>
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
