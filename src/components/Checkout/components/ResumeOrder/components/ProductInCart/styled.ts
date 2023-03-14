import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;

  padding: 0.5rem 0.25rem;
`;

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const Product = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const TotalPrice = styled.div`
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: 700;
`;

export const Divider = styled.hr`
  background: ${({ theme }) => theme.colors.base.button};
  border: none;
  height: 1px;
`;
