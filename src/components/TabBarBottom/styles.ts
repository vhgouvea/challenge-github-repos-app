import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(10)}px;
`;

export const ItemTab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 100%;
  border-top: 2px solid;
`;

export const Icon = styled(FontAwesome)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.principal};
  margin-right: ${RFValue(10)}px;
`;