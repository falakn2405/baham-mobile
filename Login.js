import { View, Text, TextInput, StyleSheet , Button} from "react-native";
import { useState } from "react";

const validRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [value, onChangeText] = useState("Write feedback here..");
    function validateEmail(){
        return validRegex.test(email);
    }
    const handleEmailChange = (value) => {
            setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    
    return (
        <View>
            <Text>First Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Falak"
                onChangeText={(value) => setName(value)}
            />
            <Text>First Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Naz"
                onChangeText={(value) => setName(value)}
            />
            <Text>Email Address:</Text>
            <TextInput
                value={email}
                onChangeText={handleEmailChange}
                style={{color:(validateEmail()? 'black':'red')}}
                placeholder={"baham.user@kiet.edu.pk"}
                keyboardType="email-address"
            />
            <Text>Password : </Text>
            <TextInput
                value={password}
                onChangeText={handlePasswordChange}
                style={{}}
                keyboardType={"default"}
                secureTextEntry={true}
            />
            <Text>FeedBack: </Text>
            <TextInput
                editable
                multiline
                numberOfLines={3}
                onChangeText={(text) => onChangeText()}
                value={value}
                style={styles.feedback}
            />        
            <Button title="Submit" color="#1f65ff"/>
        </View>
    );
}

export default Login;
const styles = StyleSheet.create({
    feedback: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        borderColor: "black",
        borderStyle: "solid",
        backgroundColor: "white",
        marginBottom:10
    },
    input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});