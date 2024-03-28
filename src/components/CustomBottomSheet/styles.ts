import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ContentBottomSheet = styled.View`
  height: ${RFValue(162)}px;
  padding: ${RFValue(0)}px ${RFValue(16)}px ${RFValue(16)}px ${RFValue(16)}px;
  gap: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.white };
`;

export const TitleBottomSheet = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  line-height: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.text_title_bottom_sheet};
`;

export const ContentButtonBottomSheet = styled.View`
  flex-direction: row;
  height: ${RFValue(42)}px;
  gap: ${RFValue(10)}px;
`;