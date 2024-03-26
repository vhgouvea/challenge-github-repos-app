import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ItemTab = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 2px solid;
`;

export const Icon = styled(FontAwesome)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.principal};
  margin-right: ${RFValue(10)}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(19.92)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
`;