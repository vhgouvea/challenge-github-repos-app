import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  top: ${RFValue(56)}px;
  padding: ${RFValue(16)}px;
  gap: ${RFValue(16)}px;
`;


export const ContentFlatList = styled.View`
  width: 100%;
  height: 95%;
`;

export const Text = styled.Text `
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.inter_regular };
  color: ${({ theme }) => theme.colors.dark_yellow  };
`;