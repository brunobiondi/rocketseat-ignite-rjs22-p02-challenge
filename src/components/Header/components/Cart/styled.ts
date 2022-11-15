import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkCart = styled(Link)`
  background: ${({ theme }) => theme.colors.brand.yellowLight};
  border-radius: 0.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`
