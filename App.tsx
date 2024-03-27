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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ApiProvider } from './src/context/useApi';
import { RepositoryDataProvider } from './src/context/useRepositoryData';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })
  
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ApiProvider>
          <RepositoryDataProvider>
            <BottomSheetModalProvider>
              <Routes /> 
            </BottomSheetModalProvider>
          </RepositoryDataProvider>
        </ApiProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

