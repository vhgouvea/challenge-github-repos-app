
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DimensionValue, TextInput } from 'react-native';



export const Container = styled.View`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.input_bg};
  gap: ${RFValue(3)}px;

`;

export const Content = styled(TextInput)`
  height: ${RFValue(56)}px;
  padding: ${RFValue(9)}px ${RFValue(12)}px ${RFValue(8)}px ${RFValue(12)}px;
  gap: ${RFValue(3)}px;
  border-radius: ${RFValue(4)}px ${RFValue(4)}px ${RFValue(0)}px ${RFValue(0)}px;
`;

