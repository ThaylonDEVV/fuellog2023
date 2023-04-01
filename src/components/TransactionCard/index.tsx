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
        <Type>{data.type}</Type>
        <ValueLabel> Valor : </ValueLabel>
          <Value>{data.value}</Value>
      </Header>
      <AmountContainer>
        <Date>{data.date} </Date>
      </AmountContainer>
      
    </Container>
  )
}