import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import TabBarButton from "../components/TabBarBottom";
import { Home } from "../screens/Home";
import { Favorite } from "../screens/Favorite";
import { View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

export type RootTabParamList = {
  Home: undefined;
  Favorite: undefined;
}

export type RootTabRouteProps<T extends keyof RootTabParamList> = RouteProp<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppRoutes() {
  const { colors, fonts } = useTheme();

  return (
    <View style={{flex: 1}}>
      <CustomHeader />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'Home':
                return <FontAwesome6 name="github" color={color} size={size} />;
              case 'Favorite':
                return <FontAwesome6 name="star" color={color} size={size} />;
              default:
                return null;
            }
          },
          tabBarButton: props => <TabBarButton routeName={route.name} {...props} colors={colors.white} />, // Componente personalizado para os botões
          tabBarStyle: { height: 75 }, // Ajuste a altura da barra
          // tabBarIconStyle: { marginBottom: 2, marginTop: 5 }, // Ajuste o espaçamento do ícone
          tabBarLabelStyle: { fontSize: 12,  fontFamily: fonts.roboto_regular}, // Ajuste o tamanho da fonte (caso queira)
          tabBarActiveTintColor: `${colors.custom_blue}`, // Cor ao clicar
          tabBarInactiveTintColor: `${colors.custom_grey}`, // Cor quando inativo
        })}
      >
        <Tab.Screen  
          name="Home" 
          component={Home} 
          options={{
            headerShown: false, // Remova o header
          }}  
        />
        <Tab.Screen 
          name="Favorite" 
          component={Favorite} 
          options={{
            headerShown: false, // Remova o header
          }} 
        />
      </Tab.Navigator>
    </View>
  )
}