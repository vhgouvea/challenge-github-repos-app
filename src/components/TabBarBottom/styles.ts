import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${RFValue(56)}px;
`;

export const ItemTab = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  padding: ${RFValue(6)}px ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesome)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.principal};
  margin-right: ${RFValue(10)}px;
`;

export const Text = styled.Text`
  align-items: center;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(23.24)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
`;