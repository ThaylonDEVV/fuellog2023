import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { FlatList } from 'react-native';
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

import logo from './logo.png';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    { 
      id: '1',
      type: 'Gasolina - 4,5 Litros',
      value: 'R$ 19,90',
      date: '06.10.2023 10:30 AM ---- Valor L/ R$ 5,22'
    },
    {
      id: '2',
      type: 'Álcool - 2,5 Litros',
      value: 'R$ 9,99',
      date: '09.01.2023 19:30 PM ---- Valor L/ R$ 4,15'
    },
    {
      id: '3',
      type: 'Álcool - 28,8 Litros',
      value: 'R$ 119,90',
      date: '06.10.2022 08:30 AM ---- Valor L/ R$ 4,82'
    },
  ];

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
            <LogoutIcon name='logout' />
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
        <FlatList
          data={transactionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
