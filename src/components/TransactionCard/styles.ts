import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header_text};
  border-radius: 5px;

  padding: 10px 22px;
  margin-top: ${RFValue(10)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const ValueLabel = styled.Text`
  color: ${({ theme }) => theme.colors.card_title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 15px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;


export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-decoration-line: underline;
  text-decoration-color: black;
  margin-bottom: ${RFValue(10)}px;
`;

