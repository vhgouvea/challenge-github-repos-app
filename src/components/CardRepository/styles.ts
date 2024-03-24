import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'


export const Container = styled.View`
  height: ${RFValue(167)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.white };
  padding: ${RFValue(12)}px ${RFValue(16)}px ${RFValue(12)}px ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
`;