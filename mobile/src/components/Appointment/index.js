import React from 'react';

import { Container, Left, Name, Info } from './styles';

export default function Appointment({ data }) {
  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.name}</Name>
        </Info>
      </Left>
    </Container>
  );
}
