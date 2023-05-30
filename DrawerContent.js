import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Text style={styles.text}> BAHAM APP </Text>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='menu'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu"
                            onPress={() => {props.navigation.navigate('Menu')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='home-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='information-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='application-settings-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    text: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
