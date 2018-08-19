import styled from 'styled-components'
import { darken } from 'polished'
import { fontSize, width, space } from 'styled-system'

export const Image = styled.img`
  display: block;
  ${width};
  ${space};
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  line-height: 1;
  ${fontSize};
  ${space};
`

export const Subtitle = styled.h3`
  text-align: center;
  font-weight: 500;
  line-height: 1;
  ${fontSize};
  ${space};
`

export const Lead = styled.p`
  text-align: center;
  font-weight: 300;
`

export const PrimaryButton = styled.button`
  display: block;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
  ${space};

  &:active,
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    border-color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
  }
`
