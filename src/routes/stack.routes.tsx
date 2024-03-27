import React from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';


import { Details } from '../screens/Details';
import { AppRoutes } from './app.routes';
import { useTheme } from 'styled-components';
import { RepositoryModel } from '../database/models/RepositoryModel';
import { ParamListBase, RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
  Repositórios: undefined;
  Favoritos: undefined;
  Detalhes: { repository: RepositoryModel }; // Exemplo de parâmetro para a tela de detalhes
};

type Props = NativeStackScreenProps<ParamListBase>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  const { colors, fonts } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName='Repositórios'
    >
      <Stack.Screen 
        name='Repositórios' 
        component={AppRoutes} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='Favoritos' 
        component={AppRoutes} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='Detalhes'
        component={Details}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: colors.text_black,
          },
          headerTintColor: colors.text_white,
          headerTitleStyle: {
            fontFamily: fonts.roboto_semi_bold,
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  )
}
