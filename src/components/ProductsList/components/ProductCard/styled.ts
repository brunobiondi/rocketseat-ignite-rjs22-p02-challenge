import styled from 'styled-components'

export const Item = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 0.375rem 2.25rem;
  padding: 1.25rem 1.5rem;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Image = styled.img`
  margin: -2.5rem auto 0.75rem;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.brand.yellowLight};
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.colors.brand.yellowDark};
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.base.label};
  font-size: 0.875rem;
  line-height: 130%;
  margin-bottom: 2rem;
  text-align: center;
`
