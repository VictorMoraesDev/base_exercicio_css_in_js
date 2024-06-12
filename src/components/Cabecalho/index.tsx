import React from 'react';
import { HeaderContainer, Logo } from './Cabecalho.styles';

const Cabecalho: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="caminho/para/seu/logo.png" alt="Logo" />
    </HeaderContainer>
  );
};

export default Cabecalho;
