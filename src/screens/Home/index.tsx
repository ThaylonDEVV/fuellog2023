import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import React from 'react';
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
  HighlightCards,
  Transactions,
  Title,
  Logo,
  SmallText
} from './styles';
import logo from './logo.png' ;

export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>
            <HeaderTextWrapper>
              <Greeting>
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

      <HighlightCards>
        <HighlightCard 
          title='Gasolina'
          consumption='120 Litros'
          cost='R$ 5,23 / Litro'
          type='gasoline'
        />
        <HighlightCard 
          title='Álcool'
          consumption='80 Litros'
          cost='R$ 4,15 / Litro'
           type='alcohol'
        />
        <HighlightCard 
          title='Geral'
          consumption='100 Litros'
          cost='R$ 4,39 / Litro'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Abastecimentos</Title>

        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        
      </Transactions>
    </Container>
  );
}

