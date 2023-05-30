import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const About = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>About Baham App</Text>
        <Text style={styles.description}>
          Baham App is a convenient and user-friendly mobile application
          designed to assist you in your daily transportation needs. Whether you
          are commuting to work, exploring new places, or simply getting around
          town, our app provides you with the tools and information to make your
          journey seamless and efficient.
        </Text>
        <Text style={styles.description}>
          Our app offers a variety of features, including real-time public
          transportation tracking, route planning, fare information, and more. We
          strive to keep our data up-to-date and accurate, ensuring that you have
          the most reliable information at your fingertips.
        </Text>
      </View>
    );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
});