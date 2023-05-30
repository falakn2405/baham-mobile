import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Menu from './Menu';
import Home from './HomeScreen';
import About from './AboutScreen';
import Setting from './SettingScreen';
import Login from './Login'

const Drawer = createDrawerNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppHeader />
          <Drawer.Navigator initialRouteName="Login" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Setting" component={Setting} />
          </Drawer.Navigator>
        <AppFooter />
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuHeader: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'navy',
  },
  menuItem: {
    textAlign: 'center',
    margin: 12,
    fontSize: 24,
    color: 'maroon'
  },
  showMenuText: {
    fontSize: 18,
    color: 'navy',
    textAlign: 'center',
  },
  introText: {
    fontSize: 22,
    textAlign: 'center',
  }
});
