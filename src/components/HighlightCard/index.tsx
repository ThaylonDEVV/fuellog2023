import React from 'react';
import {
  Container,
  Header,
  Title,
  Consumption,
  ConsumptionLabel,
  ConsumptionValue,
  Cost,
  CostLabel,
  CostValue
} from './styles';

interface Props {
  title: string;
  consumption: string;
  cost: string;
  type: 'gasoline' | 'alcohol' | 'total';
}

export function HighlightCard({
  title,
  consumption,
  cost,
  type
}: Props) {


  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
      </Header>

      <Consumption>
        <ConsumptionLabel type={type}>Consumo médio: </ConsumptionLabel>
        <ConsumptionValue type={type}>{consumption}</ConsumptionValue>
      </Consumption>

      <Cost>
        <CostLabel type={type}>Custo médio: </CostLabel>
        <CostValue type={type}>{cost}</CostValue>
      </Cost>

    </Container>
  )
}