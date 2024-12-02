import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Icon } from 'react-native-paper';
import globalStyles from '../styles/commonStyles';  // Import shared styles

const LoginScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Icon source="dumbbell" size={60} style={globalStyles.icon} />
      <Text style={globalStyles.title}>Gym Buddies</Text>
      
      <TextInput label="Username" mode="outlined" style={globalStyles.input} />
      <TextInput label="Password" mode="outlined" secureTextEntry style={globalStyles.input} />
      
      <Button mode="contained" style={globalStyles.button}>Login</Button>
      <Button onPress={() => console.log('Register')} style={globalStyles.textButton}>Register</Button>
      <Button onPress={() => console.log('Forgot Password')} style={globalStyles.textButton}>Forgot Password?</Button>
    </View>
  );
};

export default LoginScreen;
