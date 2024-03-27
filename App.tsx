import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { BottomSheetProvider } from '@context/useBottomSheet';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })


  const toastConfig = {
    success: (props: any) => (
      <BaseToast
      {...props}
        style={{ borderLeftColor: '#90e1a7', height: 80, width: '90%' }}
        contentContainerStyle={{ paddingLeft: 25 }}
        text1Style={{
          flexWrap: "wrap",
          fontSize: 15,
          color: '#1b873d'
        }}
        text2Style={{
          flexWrap: "wrap",
          fontSize: 13,        
          color: '#111' 
        }}
      />
    ),

    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: '#ff8989', height: 80, width: '90%' }}
        text1Style={{
          flexWrap: "wrap",
          fontSize: 15,
          color: 'red'
        }}
        text2Style={{
          flexWrap: "wrap",
          fontSize: 13,
          color: '#111'
        }}
      />
    ),
  
    warning: (props: any) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: '#ffca72', height: 80, width: '90%'}}
        text1Style={{
          flexWrap: "wrap",
          fontSize: 15,
          color: 'orange'
        }}
        text2Style={{
          flexWrap: "wrap",
          fontSize: 13,
          color: '#111'
        }}
      />
    )
  };

  
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ApiProvider>
          <RepositoryDataProvider>
            <BottomSheetProvider>
              <Routes /> 
              <Toast config={toastConfig}/>
            </BottomSheetProvider>
          </RepositoryDataProvider>
        </ApiProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

