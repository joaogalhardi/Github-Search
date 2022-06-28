import { useState } from 'react';
import { Context } from './context';

export const GlobalProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState(null);

  return (
    <Context.Provider value={{ infoUser, setInfoUser }}>
      {children}
    </Context.Provider>
  );
};
