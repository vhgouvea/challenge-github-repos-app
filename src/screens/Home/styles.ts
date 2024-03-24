import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  top: ${RFValue(56)}px;
  gap: ${RFValue(16)}px;
  left: ${RFValue(-1)}px;
  padding: ${RFValue(16)}px;
`;

export const ContentFlatList = styled.View`
  width: 100%;
  height: 80%;
`;

export const Text = styled.Text `
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.inter_regular };
  color: ${({ theme }) => theme.colors.dark_yellow  };
`;