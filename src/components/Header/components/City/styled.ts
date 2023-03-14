import styled from 'styled-components'

export const LinkCity = styled.a`
  background: ${({ theme }) => theme.colors.brand.purpleLight};
  color: ${({ theme }) => theme.colors.brand.purpleDark};
  border-radius: 0.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`
