import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'alcohol' | 'gasoline' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title : theme.colors.text_back};

  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(8)}px;
  border-radius: ${RFValue(30)}px;
  border: 2px solid black;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.text_back : theme.colors.card_title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;


export const Consumption = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
`;

export const ConsumptionLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 15px;
`;

export const ConsumptionValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;

export const Cost = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
`;

export const CostLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 30px;
`;

export const CostValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.header_text : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;
