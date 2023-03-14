import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ResumeBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResumeItem = styled(ResumeBase)`
  color: ${({ theme }) => theme.colors.base.text};

  &:first-child {
    font-size: 0.875rem;
  }
`;

export const ResumeTotal = styled(ResumeBase)`
  color: ${({ theme }) => theme.colors.base.subtitle};

  * {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
