import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(10)}px;
`;

export const ItemTab = styled.TouchableOpacity`
  width: 95%;
  height: 100%;
  border-top: 2px solid;
`;