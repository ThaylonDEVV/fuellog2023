import { 
  Container,
  Header,
  UserWrapper,
  CarInfo,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  LogoutButton,
  LogoutIcon, 
  Logo,
  SmallText
} from './styles';
import logo from './logo.png' ;
import React from 'react';
export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>

            <HeaderTextWrapper>
              <Greeting >
                BEM-VINDO
              </Greeting>
              <SmallText>Informações sobre o veículo:</SmallText>
                <Logo source={logo} />
                <CarPlate>
                  AAA-9999
  
                </CarPlate>
            </HeaderTextWrapper>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name='logout'>

            </LogoutIcon>
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
}

