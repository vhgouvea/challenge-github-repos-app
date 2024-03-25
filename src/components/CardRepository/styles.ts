import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
  height: ${RFValue(167)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.white };
  padding: ${RFValue(12)}px ${RFValue(16)}px ${RFValue(12)}px ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
  gap: ${RFValue(16)}px;
`;

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

export const ContentText = styled.View`
  flex-direction: row;
`;

export const ContentHeader = styled.View`
  height: ${RFValue(29)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.Image`
  width: ${RFValue(29)}px;
  height: ${RFValue(29)}px;
  border-radius: ${RFValue(50)}px;
`;

export const Line = styled.View`
  width: 100%;
  height: ${RFValue(0)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.custom_light_grey};
  opacity: 0.9;
  transform: rotate(0deg); /* Defina o ângulo de rotação conforme necessário */
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text_description};
  line-height: ${RFValue(14.52)}px;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(36)}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(103)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(4)}px;
  padding: ${RFValue(8)}px ${RFValue(10)}px ${RFValue(8)}px ${RFValue(10)}px;
  gap: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.yellow_bg};
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter_bold};
  color: ${({ theme }) => theme.colors.dark_yellow};
  line-height: ${RFValue(14.52)}px;
`;

export const ContentStargazers = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(34)}px;
  height: ${RFValue(20)}px;
  gap: ${RFValue(6)}px;
`;

export const ContentLanguage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFValue(74)}px;
  height: ${RFValue(15)}px;
  gap: ${RFValue(6)}px;
`;

export const Elipse = styled.View`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.custom_red};
`;