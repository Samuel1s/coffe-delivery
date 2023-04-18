import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      cursor: pointer;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      border-radius: 0.375rem;
    }
  }
`

const ContentSettings = styled.span`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;
`

export const LocationContent = styled(ContentSettings)`
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-300']};
  background: ${(props) => props.theme['purple-100']};
`

export const CartContent = styled(ContentSettings)`
  color: ${(props) => props.theme['yellow-300']};
  background: ${(props) => props.theme['yellow-100']};
`
