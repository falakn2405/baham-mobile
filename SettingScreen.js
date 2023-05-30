import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const Setting = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkModeEnabled((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ true: '#007bff' }}
          thumbColor={isNotificationsEnabled ? '#007bff' : '#f4f3f4'}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ true: '#007bff' }}
          thumbColor={isDarkModeEnabled ? '#007bff' : '#f4f3f4'}
        />
      </View>
      <TouchableOpacity style={styles.optionButton} onPress={() => alert('Clicked')}>
        <Text style={styles.optionButtonText}>Privacy Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => alert('Clicked')}>
        <Text style={styles.optionButtonText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Clicked')}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  settingLabel: {
    fontSize: 18,
  },
  optionButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#f4f3f4',
    borderRadius: 5,
  },
  optionButtonText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#f00',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
