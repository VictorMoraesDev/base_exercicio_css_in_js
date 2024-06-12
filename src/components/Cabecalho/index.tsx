<<<<<<< HEAD
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
=======
import styles from './Cabecalho.module.css'

const Cabecalho = () => (
  <header className={styles.cabecalho}>
    <h1>EBAC Jobs</h1>
  </header>
)

export default Cabecalho
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
