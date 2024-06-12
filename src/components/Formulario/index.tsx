import React from 'react';
import { FormContainer, ButtonPesquisar, Campo } from './styles';

const Formulario: React.FC = () => {
  return (
    <FormContainer>
      <Campo type="text" placeholder="Digite sua busca" />
      <ButtonPesquisar>Pesquisar</ButtonPesquisar>
    </FormContainer>
  );
};

export default Formulario;
