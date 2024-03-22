import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/dev';
import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })
  
  return (
    <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}

