import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  max-width: 16rem;
  min-height: 20rem;
  margin-right: 1.5rem;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

  img {
    margin-top: -2.5rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['brown-700']};
  }

  p {
    text-align: center;
    margin-bottom: 2rem;

    color: ${(props) => props.theme['brown-300']};
  }
`
export const TypeContainer = styled.div`
  gap: 0.25rem;
  display: flex;
  align-items: center;
`

export const TypeList = styled.span`
  font-weight: 700;
  text-align: center;
  font-size: 0.58rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`

export const BuyContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme['brown-500']};

  span:last-child {
    font-size: 1.625rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-items: center;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['gray-300']};

  span {
    flex: 1;
    color: ${(props) => props.theme.black};
  }

  button {
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-radius: 0.375rem;
    color: ${(props) => props.theme['purple-300']};
    background: ${(props) => props.theme['gray-300']};
  }
`

export const ShoppingCartButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-500']};
`
