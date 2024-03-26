
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DimensionValue } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(4)}px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(187)}px;
  height: ${RFValue(42)}px;
  padding: ${RFValue(8)}px ${RFValue(22)}px ${RFValue(8)}px ${RFValue(22)}px;
  gap: ${RFValue(8)}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_semi_bold};
  color: ${({ theme }) => theme.colors.text_black };
  line-height: ${RFValue(26)}px;
  letter-spacing: ${RFValue(0.46)}px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.text_black };
  font-size: ${RFValue(24)}px;
`;