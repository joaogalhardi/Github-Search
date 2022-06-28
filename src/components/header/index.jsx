import { React, useState, useEffect, useContext } from 'react';
import { Context } from '../../contexts/GlobalProvider/context';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

import * as S from './styles';

function Header() {
  const { setInfoUser } = useContext(Context);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleClick = async () => {
    if (!inputValue) return;
    try {
      setInfoUser('');
      setError(false);
      const { data } = await axios.get(
        'https://api.github.com/users/' + inputValue,
      );
      setInfoUser(data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <S.HeaderSection>
      <S.HeaderTitle>Github Profile</S.HeaderTitle>
      <S.HeaderInputContainer>
        <S.HeaderInput
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <S.HeaderSearchButton onClick={() => handleClick()}>
          <FiSearch size={15} />
        </S.HeaderSearchButton>
      </S.HeaderInputContainer>
      {error && (
        <S.HeaderTitle error={error}>Esse usuario não existe</S.HeaderTitle>
      )}
    </S.HeaderSection>
  );
}

export default Header;
