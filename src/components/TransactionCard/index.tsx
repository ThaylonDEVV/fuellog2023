import { 
  Container,
  Header,
  ValueLabel,
  Value,
  Type,
  AmountContainer,
  Date,
} from "./styles";

interface TransactionCardProps{
  type: 'alcohol' | 'gasoline';
  value: string;
  date: string;



};
interface Props {
  data: TransactionCardProps;
}

import React from 'react';
export function TransactionCard({data}: Props ) {
  return (
    <Container>
      <Header>
        <Type>Gasolina - 4,5 Litros</Type>
        <ValueLabel> Valor </ValueLabel>
          <Value>{data.value}</Value>
      </Header>
      <AmountContainer>
        <Date>06.10.2023 10:30 AM---- Valor L/ R$ 5,22 </Date>
      </AmountContainer>
      
    </Container>
  )
}