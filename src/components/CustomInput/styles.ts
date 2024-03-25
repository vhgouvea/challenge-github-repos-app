
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DimensionValue, TextInput } from 'react-native';


interface Props {
  invertColors: boolean;
}

export const Container = styled(TextInput)`
  height: ${RFValue(56)}px;
`;

// export const Text = styled.Text<Props>`
//   font-size: ${RFValue(15)}px;
//   font-family: ${({ theme }) => theme.fonts.roboto_semi_bold};
//   color: ${({ theme, invertColors }) => invertColors ? theme.colors.custom_blue : theme.colors.white };
// `;