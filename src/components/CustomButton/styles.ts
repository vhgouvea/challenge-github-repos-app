
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DimensionValue } from 'react-native';


interface Props {
  invertColors: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(4)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, invertColors }) => invertColors ? theme.colors.white : theme.colors.custom_blue };
`;

export const Text = styled.Text<Props>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_semi_bold};
  color: ${({ theme, invertColors }) => invertColors ? theme.colors.custom_blue : theme.colors.white };
`;