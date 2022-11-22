import styled from 'styled-components'

export const ListSummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 2rem;

  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['gray-125']};

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > img {
      width: 64px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  > span {
    font-weight: 700;
  }
`

export const ItemTitle = styled.span`
  color: ${(props) => props.theme['gray-700']};
`
export const ButtonRemoveItem = styled.div`
  background-color: ${(props) => props.theme['gray-125']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  span {
    font-size: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme['purple-450']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-150']};
    color: ${(props) => props.theme['gray-700']};

    svg {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`

export const OperationItemCart = styled.div`
  display: flex;
  gap: 0.5rem;
`
