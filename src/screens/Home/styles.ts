import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(30)}px;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(26)}px;
`;

export const Greeting = styled.Text`
color: ${({ theme }) => theme.colors.header_text};
font-family: ${({ theme }) => theme.fonts.semi_bold};
font-size: ${RFValue(25)}px;
line-height: ${RFValue(29)}px;
left: ${RFValue(59)}px;

`;

export const SmallText = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(20)}px;
  left: ${RFValue(59)}px;
  text-align: center;
`;

export const CarPlate = styled.Text`
color: ${({ theme }) => theme.colors.car_plate};
font-family: ${({ theme }) => theme.fonts.bold};
font-size: ${RFValue(19)}px;
line-height: ${RFValue(23)}px;

padding: ${RFValue(9)}px;
background-color: ${({ theme }) => theme.colors.background};
border-radius: ${RFValue(30)}px;
border: 2px solid white;
left : ${RFValue(59)}px;
text-align: center; // Centraliza o texto horizontalmente
`;

export const LogoutButton = styled.View``;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.header_text};
  font-size: ${RFValue(24)}px;

`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  
  contentContainerStyle: { paddingLeft: 20 }
})`
  width: 100%;
  position: absolute;
  
  margin-top: ${getStatusBarHeight() + RFValue(140)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 25px;
  margin-top: ${RFValue(100)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.card_title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Logo = styled.Image`
  position: absolute;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  left: ${RFValue(-44)}px;
  top: ${getStatusBarHeight() + RFValue(-45)}px;
`;