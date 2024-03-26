import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.principal};
`;