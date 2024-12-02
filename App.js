import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// Import screens
import LoginScreen from './components/LoginScreen';
// import RegisterScreen from './components/RegisterScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';

export default function App() {
  return (
    <PaperProvider>
      {/* Uncomment one screen at a time to display it */}
      <LoginScreen /> 
      {/*<RegisterScreen /> */}
      {/* <ForgotPasswordScreen /> */}
    </PaperProvider>
  );
}
