
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DimensionValue, TextInput } from 'react-native';



export const Container = styled.View`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.input_bg};
  border-radius: ${RFValue(4)}px ${RFValue(4)}px ${RFValue(0)}px ${RFValue(0)}px;
  padding: ${RFValue(9)}px ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px;
  gap: ${RFValue(3)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.custom_grey};
`;

export const Content = styled(TextInput)`
  height: ${RFValue(24)}px;
  gap: ${RFValue(8)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  line-height: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.custom_grey};
`;
