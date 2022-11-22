import styled from 'styled-components'
import { FormSections } from '../FormOrder/styles'

export const OrderSummaryContainer = styled.aside`
  max-width: 40rem;
  flex: 1;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.4625rem;
    margin-bottom: 0.9375rem;
  }
`

export const FormSummaryConfirmation = styled(FormSections)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  footer {
    div {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 0.875rem;
      }
    }

    div:not(:first-child) {
      padding-top: 0.75rem;
    }
  }
`

export const TotalOrder = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};

  p {
    font-size: 1.25rem !important;
  }
`

export const ButtonConfirmationOrder = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  border: 0;
  padding: 0.75rem;

  background-color: ${(props) => props.theme['yellow-150']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;

  border-radius: 6px;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-200']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['yellow-50']};
    cursor: not-allowed;
  }
`

export const CartEmpty = styled.div`
  p {
    font-size: 1.25rem;
    font-weight: 700;

    padding-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
  }
`
