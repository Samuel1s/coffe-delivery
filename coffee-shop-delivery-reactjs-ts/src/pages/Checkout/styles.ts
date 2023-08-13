import styled, { css } from 'styled-components'

export const CheckoutMainContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  justify-content: space-between;
`

const CoffeeCard = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['gray-100']};
`

export const OrdersContainer = styled(CoffeeCard)`
  width: 40rem;
`

export const CoffeeListSelected = styled(CoffeeCard)`
  width: 28rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
`

export const AddressForm = styled.div``

const BaseInput = styled.input`
  border: 0;
  gap: 0.75rem;
  height: 2.5rem;
  padding: 0.75rem;
  font-size: inherit;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background: transparent;
  color: ${(props) => props.theme['brown-300']};
  background: ${(props) => props.theme['gray-200']};

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${(props) => props.theme['brown-300']};
  }
`

export const FormInput = styled(BaseInput)`
  flex: 1;
  ${(props) =>
    props.id === 'street' &&
    css`
      width: 100%;
    `};
`
