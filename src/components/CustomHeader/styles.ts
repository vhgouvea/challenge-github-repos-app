
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, FontAwesome, FontAwesome6, MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
  height: ${RFValue(56)}px;
  padding: ${RFValue(0)}px ${RFValue(8)}px ${RFValue(0)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white };
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.View`
  width: 80%;
  height: ${RFValue(32)}px;
  gap: ${RFValue(24)}px;
`;

export const HeaderText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 20%;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(48)}px;
  padding: ${RFValue(12)}px;
`;

export const Icon = styled(FontAwesome6)`
  font-size: ${RFValue(24)}px;
`;
