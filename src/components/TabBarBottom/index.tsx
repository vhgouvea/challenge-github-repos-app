import React, { useState } from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Container, Icon, ItemTab, Text } from './styles';
import { ParamListBase, RouteProp, useNavigation, useNavigationState } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';


interface Props extends BottomTabBarButtonProps {
  routeName: string;
}



const TabBarButton = ({ children, onPress, routeName }: Props) => {
  const navigation = useNavigation();
  const [borderTop, setBorderTop] = useState();
  const { colors, fonts } = useTheme();
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
        return <AntDesign name="github" color={routeName === currentRoute ? colors.custom_blue : colors.custom_grey} size={24} />;
      case 'Favorite':
        return <MaterialIcons name="star" color={routeName === currentRoute ? colors.custom_blue : colors.custom_grey} size={24} />;
      default:
        return null;
    }
  };


  const handleNavigate = () => {
    navigation.navigate(routeName as never);

   };

 return (
    <Container>
      <ItemTab onPress={handleNavigate} >
        {getTabBarIcon(routeName)}
        <Text style={{ color: routeName === currentRoute ? colors.custom_blue : colors.custom_grey }}>
          {getTabBarLabel(routeName)}
          </Text>
      </ItemTab>
    </Container>
 );
};

export default TabBarButton;