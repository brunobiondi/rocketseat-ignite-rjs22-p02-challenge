import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 0.375rem;
  padding: 2.5rem;
`

interface FormProps {
  isLoading: boolean
}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: all 0.2s;

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`

export const FlexRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const FlexColumn = styled.div<{ flex?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({ flex }) => flex ?? 1};
  gap: 0.75rem;

  position: relative;
`

export const Input = styled.input<{ paddingRight?: string }>`
  background: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.base.text};
  padding: 0.75rem ${({ paddingRight }) => paddingRight ?? '0.75rem'} 0.75rem
    0.75rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
    opacity: 1;
  }
`

export const LabelObs = styled.label`
  color: ${({ theme }) => theme.colors.base.label};
  font-size: 0.75rem;
  font-style: italic;
  position: absolute;
  right: 0.75rem;
`
