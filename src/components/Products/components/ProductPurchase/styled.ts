import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;

  padding: 0rem 0.25rem;
`

export const Price = styled.div`
  color: ${({ theme }) => theme.colors.base.text};
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  font-weight: 800;

  flex: 1;

  span {
    font-size: 0.875rem;
  }
`

export const Amount = styled.div`
  background: ${({ theme }) => theme.colors.base.button};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.base.title};
  font-size: 0.875rem;

  display: flex;
  align-items: stretch;

  a {
    border-radius: 0.375rem;
    padding: 0.375rem;
    transition: all 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${({ theme }) => theme.colors.base.hover};
    }
  }

  span {
    width: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const AddCart = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.brand.purpleDark};
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition: all 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.purple};
  }
`
