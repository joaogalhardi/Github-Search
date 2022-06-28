import React from 'react';
import { Container } from './styles';

function MainContainer(props) {
  return <Container>{props.children}</Container>;
}

export default MainContainer;
