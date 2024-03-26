
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DimensionValue } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


interface Props {
  invertColors: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(4)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme, invertColors }) => invertColors ? theme.colors.white : theme.colors.dark_yellow };
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(187)}px;
  height: ${RFValue(42)}px;
  padding: ${RFValue(8)}px ${RFValue(11)}px ${RFValue(8)}px ${RFValue(11)}px;
  gap: ${RFValue(8)}px;
`;

export const Text = styled.Text<Props>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_semi_bold};
  color: ${({ theme, invertColors }) => invertColors ? theme.colors.custom_blue : theme.colors.text_black };
  line-height: ${RFValue(26)}px;
`;

export const Icon = styled(MaterialIcons)<Props>`
  color: ${({ theme, invertColors }) => invertColors ? theme.colors.custom_blue : theme.colors.text_black };
  font-size: ${RFValue(24)}px;
`;