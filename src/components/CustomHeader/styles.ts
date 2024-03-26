
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


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
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
`;

export const Icon = styled(MaterialIcons)`
`;

export const Img = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;


export const ContentBottomSheet = styled.View`
  background-color: ${({ theme }) => theme.colors.white };
  height: ${RFValue(162)}px;
  justify-content: center;
  padding: ${RFValue(0)}px ${RFValue(16)}px ${RFValue(16)}px ${RFValue(16)}px;
`;

export const TitleBottomSheet = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  line-height: ${RFValue(28)}px;
`;

export const ContentButtonBottomSheet = styled.View`
  flex-direction: row;
  height: ${RFValue(42)}px;
  gap: ${RFValue(10)}px;
`;
