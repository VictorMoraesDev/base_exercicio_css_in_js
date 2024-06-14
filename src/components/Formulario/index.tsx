import React from 'react';
import { FormContainer, ButtonPesquisar } from './styles';
import Campo from './Campo';

const Formulario = () => (
  <FormContainer>
    <Campo type="text" placeholder="Digite sua busca" />
    <ButtonPesquisar>Pesquisar</ButtonPesquisar>
  </FormContainer>
);

export default Formulario;
