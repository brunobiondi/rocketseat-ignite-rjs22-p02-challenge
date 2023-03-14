import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCart = styled(Link)`
  background: ${({ theme }) => theme.colors.brand.yellowLight};
  border-radius: 0.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const TotalProductsCart = styled.span`
  background: ${({ theme }) => theme.colors.brand.yellowDark};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.base.white};
  font-size: 0.75rem;
  font-weight: 700;
  height: 1.25rem;
  margin-left: 1.125rem;
  margin-top: -2.25rem;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
