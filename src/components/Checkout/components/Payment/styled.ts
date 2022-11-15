import styled from 'styled-components'

interface SelectPaymentMethod {
  selectPaymentMethod?: boolean
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.base.card};}
  border-radius: 0.375rem;
  padding: 2.5rem;
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethod = styled.button<SelectPaymentMethod>`
  background: ${(props) =>
    props.selectPaymentMethod
      ? props.theme.colors.brand.purpleLight
      : props.theme.colors.base.button};

  border: 1px solid
    ${(props) =>
      props.selectPaymentMethod
        ? props.theme.colors.brand.purple
        : props.theme.colors.base.button};

  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.base.text};
  cursor: pointer;
  font-size: 0.75rem;
  padding: 1rem;
  text-transform: uppercase;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;

  &:hover {
    background: ${({ theme }) => theme.colors.base.button};
  }
`
