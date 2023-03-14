import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Content = styled.div`
  padding-top: 0.125rem;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: 1rem;
  padding-bottom: 0.125rem;
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.base.text};
  font-size: 0.875rem;
`;
