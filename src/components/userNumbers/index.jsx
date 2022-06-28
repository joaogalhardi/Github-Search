import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, NumberContainer } from './styles';

function UserNumbers({followers, following, public_repos}) {
  const history = useHistory();
  function handleOnClick(route) {
    return history.push(route);
  }

  return (
    <Container>
      <NumberContainer onClick={() => handleOnClick('/repos')}>
        <h1>{public_repos}</h1>
        <h2>Repositórios</h2>
      </NumberContainer>

      <NumberContainer>
        <h1>{followers}</h1>
        <h2>Seguidores</h2>
      </NumberContainer>

      <NumberContainer>
        <h1>{following}</h1>
        <h2>Seguindo</h2>
      </NumberContainer>
    </Container>
  );
}

export default UserNumbers;
