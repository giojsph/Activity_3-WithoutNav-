import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Icon } from 'react-native-paper';
import globalStyles from '../styles/commonStyles';  // Import shared styles

const ForgotPasswordScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Icon source="dumbbell" size={60} style={globalStyles.icon} />
      <Text style={globalStyles.title}>Gym Buddies</Text>
      
      <TextInput label="Email" mode="outlined" style={globalStyles.input} />
      
      <Button mode="contained" style={globalStyles.button}>Reset Password</Button>
      <Button onPress={() => console.log('Back to Login')} style={globalStyles.textButton}>Back to Login</Button>
    </View>
  );
};

export default ForgotPasswordScreen;
