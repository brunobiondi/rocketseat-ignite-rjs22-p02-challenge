import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  padding: 5.875rem 2.5rem 6.75rem;

  display: flex;
  align-items: center;
  gap: 3.5rem;
`;

export const BannerTexts = styled.div`
  max-width: 36.75rem;
`;

export const Headline = styled.h1`
  color: ${({ theme }) => theme.colors.base.title};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 4.125rem;
`;

export const FeatureList = styled.ul`
  display: flex;
  gap: 1.875rem;
  margin-bottom: 1.25rem;

  svg {
    height: 2rem;
    min-height: 2rem;
    width: 2rem;
    min-width: 2rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${({ theme }) => theme.colors.base.text};
    font-size: 1rem;
    width: 100%;
  }

  li:nth-of-type(odd) {
    max-width: 15rem;
  }
`;
