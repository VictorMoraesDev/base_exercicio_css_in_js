import React from 'react'
import styled from 'styled-components'

interface VagaProps {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaContainer = styled.div`
  /* Estilos para o container da vaga, se necessário */
`

const Titulo = styled.h2`
  font-weight: bold;
  color: #333; /* Ou qualquer outra cor que você queira */
  /* Outros estilos para o título, se necessário */
`

interface DetalhesLinkProps {
  href: string
  children: React.ReactNode
}

const DetalhesLink = styled.a<DetalhesLinkProps>`
  color: #007bff; /* Cor do link */
  text-decoration: none; /* Remove o sublinhado do link */
  font-weight: bold; /* Deixa o link em negrito */
  display: inline-block; /* Para permitir o uso de margens e padding */
  margin-top: 16px; /* Espaçamento superior */

  &:hover {
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
  }
`

const Vaga: React.FC<VagaProps> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => {
  return (
    <VagaContainer>
      <Titulo>{titulo}</Titulo>
      <p>Localização: {localizacao}</p>
      <p>Nível: {nivel}</p>
      <p>Modalidade: {modalidade}</p>
      <p>
        Salário: {salarioMin} - {salarioMax}
      </p>
      <p>Requisitos: {requisitos.join(', ')}</p>
      <DetalhesLink href="#">Ver detalhes e candidatar-se</DetalhesLink>
    </VagaContainer>
  )
}

export default Vaga
