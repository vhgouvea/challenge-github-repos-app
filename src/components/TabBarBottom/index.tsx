import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Container, Icon, ItemTab } from './styles';
import { ParamListBase, RouteProp, useNavigation, useNavigationState } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';


interface Props extends BottomTabBarButtonProps {
  colors: string;
  routeName: string;
}



const TabBarButton = ({ children, onPress, colors, routeName }: Props) => {
  const navigation = useNavigation();
  const [borderTop, setBorderTop] = useState();
  const { colors: color, fonts } = useTheme();
  const currentRoute = useNavigationState(state => state.routes[state.index].name); // Obtém a rota atual


  const getTabBarLabel = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'Repositórios';
      case 'Favorite':
        return 'Favoritos';
      default:
        return routeName;
    }
  };

  const getTabBarIcon = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return <FontAwesome6 name="github" color={routeName === currentRoute ? color.custom_blue : color.custom_grey} size={24} />;
      case 'Favorite':
        return <FontAwesome6 name="star" color={routeName === currentRoute ? color.custom_blue : color.custom_grey} size={24} />;
      default:
        return null;
    }
  };


  const handlePress = () => {
    // ... Ajuste o estilo do botão antes de executar a função onPress
    navigation.navigate(routeName as never);

   };

 return (
    <Container>
      <ItemTab onPress={handlePress} >
        {getTabBarIcon(routeName)}
        <Text style={{ color: routeName === currentRoute ? color.custom_blue : color.custom_grey }}>
          {getTabBarLabel(routeName)}
          </Text>
      </ItemTab>
    </Container>
 );
};

export default TabBarButton;