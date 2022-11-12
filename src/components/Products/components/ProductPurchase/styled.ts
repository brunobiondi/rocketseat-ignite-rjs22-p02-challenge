import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
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
  padding: 0.25rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    border-radius: 0.375rem;
    padding: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.base.hover};
    }
  }

  span {
    height: 1.25rem;
    width: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
