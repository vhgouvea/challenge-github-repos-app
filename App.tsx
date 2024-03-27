import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/dev';

import theme from '@theme/index';
import { Routes } from '@routes/index';
import { ApiProvider } from '@context/useApi';
import { RepositoryDataProvider } from '@context/useRepositoryData';

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

