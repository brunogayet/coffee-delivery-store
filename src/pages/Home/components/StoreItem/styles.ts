import styled from 'styled-components'

export const StoreItemContainer = styled.div`
  background-color: ${(props) => props.theme['gray-75']};
  width: 16rem;
  padding: 0rem 1.25rem 1.25rem 1.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const HeaderStoreItem = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.75rem;

  img {
    width: 120px;
    margin-top: -1.25rem;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 0.25rem;

    span {
      text-transform: uppercase;
      font-size: 0.625rem;
      font-weight: 700;
      color: ${(props) => props.theme['yellow-200']};
      background-color: ${(props) => props.theme['yellow-50']};

      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }
`

export const ContentStoreItem = styled.div`
  padding-top: 1rem;
  text-align: center;
  > strong {
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
  }

  > p {
    color: ${(props) => props.theme['gray-450']};
    font-size: 0.875rem;
    padding-top: 0.5rem;
    text-align: center;
    line-height: 1.1375rem;
  }
`

export const FooterStoreItem = styled.footer`
  padding-top: 2.0625rem;
  display: flex;
  justify-content: space-between;
  gap: 1.4375rem;

  > div:first-of-type {
    > p {
      color: ${(props) => props.theme['gray-650']};
      font-size: 0.875rem;

      strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
      }
    }
  }
`

export const IncrementItemCart = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    background-color: ${(props) => props.theme['gray-125']};
    border-radius: 6px;
    padding: 0rem 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    > span {
      width: 1.25rem;
      height: 1.3125rem;
      text-align: center;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const ButtonOperationItemCart = styled.button`
  color: ${(props) => props.theme['purple-450']};
  display: flex;
  border: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${(props) => props.theme['purple-700']};

  svg {
    color: ${(props) => props.theme['gray-75']};
  }
`
