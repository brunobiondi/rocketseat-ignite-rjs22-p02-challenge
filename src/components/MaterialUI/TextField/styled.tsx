// based on: https://www.youtube.com/watch?v=rZ-aB10tLVQ

import styled from 'styled-components'
import { ContainerProps, InputProps } from './StyledProps'

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => props.width};

  &:hover input,
  &:focus-within input {
    border: 1px solid ${({ theme }) => theme.colors.base.hover};
  }

  &:focus-within label,
  input:not(:placeholder-shown) ~ label {
    background: ${({ theme }) => theme.colors.base.card};
    bottom: auto;
    color: ${({ theme }) => theme.colors.base.label};
    font-size: 0.75rem;
    left: 0.5rem;
    padding: 0 0.375rem;
    top: -0.5rem;

    background: linear-gradient(
      ${({ theme }) => theme.colors.base.card} 50%,
      ${({ theme }) => theme.colors.base.input} 60%
    );
  }
`

export const Input = styled.input<InputProps>`
  background: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  border-radius: 0.25rem;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.base.text};
  font-size: 0.875rem;
  padding: 0.75rem 0.8125rem;
  width: ${(props) => props.width};

  &:focus,
  &:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.colors.base.hover};
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.base.label};
  cursor: text;
  font-size: 0.875rem;
  left: 0;
  padding: calc(0.75rem + 1px);
  position: absolute;
  transition: all 0.1s ease-in-out;
`
