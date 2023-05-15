import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(props) {
    return (
        <View style={styles.container}>
            <Text sylte={styles.copyright}> {props.copyright} 
                <Text style={styles.footer}>{props.footer}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.075,
        backgroundColor: '#1f65ff',
        padding: 5,
    },
    copyright: {
        textAlign: 'auto',
    },
    footer: {
        fontStyle: 'italic'
    }
});