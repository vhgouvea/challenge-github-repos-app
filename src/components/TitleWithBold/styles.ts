import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(14.52)}px;
`;

export const TitleBold = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter_bold};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(14.52)}px;
`;

export const Container = styled.View`
  flex-direction: row;
`;