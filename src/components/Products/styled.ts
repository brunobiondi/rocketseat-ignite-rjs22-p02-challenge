import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  padding: 2rem 2.5rem 10rem;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 3.375rem;
`
