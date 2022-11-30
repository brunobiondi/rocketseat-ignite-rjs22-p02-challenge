import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${({ theme }) => theme.colors.base.card};}
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;
`

export const ButtonConfirmOrder = styled.button`
  background: ${({ theme }) => theme.colors.brand.yellow};
  border: none;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.base.white};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.75rem;
  text-transform: uppercase;
  transition: all 0.5s;
  min-height: 2.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.yellowDark};
  }
`
