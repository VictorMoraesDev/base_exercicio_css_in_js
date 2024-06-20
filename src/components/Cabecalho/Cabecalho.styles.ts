import styled from 'styled-components'

interface LogoProps {
  src: string
  alt: string
}

export const HeaderContainer = styled.header`
  /* Estilos do container do cabeçalho */
`

export const Logo = styled.img<LogoProps>`
  /* Estilos do logo */
`
