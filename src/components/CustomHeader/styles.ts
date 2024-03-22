
import styled from 'styled-components/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white };
`;

export const HeaderText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;


export const RightComponentContainer = styled.View`
  padding: 4px;
`;

export const GearIcon = styled(FontAwesome6)`
  color: #333; /* Cor do ícone de engrenagem */
`;