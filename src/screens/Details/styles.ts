import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.View`
  height: ${RFValue(368)}px;
  gap: ${RFValue(16)}px;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(24.2)}px;
`;

export const TitleBold = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.inter_bold};
  color: ${({ theme }) => theme.colors.text_title};
  line-height: ${RFValue(24.2)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text_description};
  line-height: ${RFValue(19.36)}px;
`;

export const ContentElipse = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${RFValue(88)}px;
  height: ${RFValue(17)}px;
  gap: ${RFValue(6)}px;

`;


export const Elipse = styled.View`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  border-radius: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.custom_red};
`;


export const DescriptionElipse = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text_description};
  line-height: ${RFValue(16.94)}px;
  text-align: left;

`;

export const ContentFooter = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;
  padding: ${RFValue(16)}px;
  gap: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
