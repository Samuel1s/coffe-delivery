import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type IconVariant = 'orange' | 'yellow' | 'brown' | 'purple'

interface IconContentProps {
  variant: IconVariant
}

const iconVariantsMap = {
  orange: defaultTheme['yellow-500'],
  yellow: defaultTheme['yellow-300'],
  brown: defaultTheme['brown-500'],
  purple: defaultTheme['purple-300'],
}

export const IntroContainer = styled.section`
  display: flex;
  padding: 5.875rem 0;
  align-items: flex-start;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.125rem;
  justify-content: flex-start;

  h1 {
    margin-bottom: 1rem;
    text-align: justify;
    line-height: 3.5rem;
    font: 800 3rem 'Baloo 2', sans-serif;
    text-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    color: ${(props) => props.theme['brown-900']};
  }

  h4 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['brown-700']};
  }
`

export const ItemsDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
  }
`

export const ItemDescriptionContainer = styled.div`
  width: 100%;
  gap: 0.75rem;
  display: flex;
  margin-bottom: 1.25rem;
  align-items: center;
  color: ${(props) => props.theme['brown-500']};
`

export const IconContainer = styled.span<IconContentProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;

  ${(props) => {
    return css`
      background-color: ${iconVariantsMap[props.variant]};
      color: ${(props) => props.theme.white};
    `
  }}
`

export const CoffeeListContainer = styled.div`
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    font-weight: 800;
    text-align: justify;
    margin-bottom: 3.375rem;

    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['brown-700']};
  }
`
