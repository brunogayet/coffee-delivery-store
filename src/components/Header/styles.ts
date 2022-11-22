import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};
  font-size: 0.875rem;
  line-height: 1.1375rem;

  svg {
    color: ${(props) => props.theme['purple-450']};
  }
`

export const CartButton = styled(BaseButton)`
  position: relative;
  background-color: ${(props) => props.theme['yellow-50']};

  svg {
    color: ${(props) => props.theme['yellow-200']};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    background-color: ${(props) => props.theme['yellow-200']};
    border-radius: 50%;

    position: absolute;
    right: -0.521875rem;
    top: -0.5rem;
  }
`
