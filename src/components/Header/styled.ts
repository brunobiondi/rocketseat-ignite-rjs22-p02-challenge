import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.base.background};
  margin: 0 auto;
  max-width: 75rem;
  padding: 2rem 2.5rem;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
`
