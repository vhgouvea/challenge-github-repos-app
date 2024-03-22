import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import TabBarButton from "../components/TabBarBottom";
import { Home } from "../screens/Home";
import { Favorite } from "../screens/Favorite";

export type RootTabParamList = {
  Home: undefined;
  Favorite: undefined;
}

export type RootTabRouteProps<T extends keyof RootTabParamList> = RouteProp<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppRoutes() {
  const { colors, fonts } = useTheme();

  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Feather name="home" color={color} size={size} />;
            case 'Favorite':
              return <Feather name="shopping-bag" color={color} size={size} />;
            default:
              return null;
          }
        },
        tabBarButton: props => <TabBarButton routeName={route.name} {...props} colors={colors.white} />, // Componente personalizado para os botões
        tabBarStyle: { height: 75 }, // Ajuste a altura da barra
        // tabBarIconStyle: { marginBottom: 2, marginTop: 5 }, // Ajuste o espaçamento do ícone
        tabBarLabelStyle: { fontSize: 12,  fontFamily: fonts.roboto_regular}, // Ajuste o tamanho da fonte (caso queira)
        tabBarActiveTintColor: `${colors.white}`, // Cor ao clicar
        tabBarInactiveTintColor: `${colors.white}`, // Cor quando inativo
      })}
    >
      <Tab.Screen  
        name="Home" 
        component={Home} 
        options={{
          headerShown: true, // Remova o header
        }}  
      />
      <Tab.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{
          headerShown: true, // Remova o header
        }} 
      />
    </Tab.Navigator>

  )
}