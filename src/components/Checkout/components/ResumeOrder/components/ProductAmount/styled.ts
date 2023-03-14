import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0.5rem;
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

export const RemoveCart = styled.a`
  background: ${(props) => props.theme.colors.base.button};
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.base.text};
  font-size: 0.75rem;
  height: 2rem;
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};
  }
`
