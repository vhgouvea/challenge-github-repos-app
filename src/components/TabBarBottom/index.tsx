import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Container, ItemTab } from './styles';
import { ParamListBase, RouteProp, useNavigation, useTheme } from '@react-navigation/native';

interface Props extends BottomTabBarButtonProps {
  colors: string;
  routeName: string;
}



const TabBarButton = ({ children, onPress, colors, routeName }: Props) => {
  const navigation = useNavigation();
  const [borderTop, setBorderTop] = useState();

  const handlePress = () => {
    // ... Ajuste o estilo do botão antes de executar a função onPress
    navigation.navigate(routeName as never);

   };
 return (
    <Container>
      <ItemTab onPress={handlePress}>
        {children}
      </ItemTab>
    </Container>
 );
};

export default TabBarButton;