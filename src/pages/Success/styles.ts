import styled from 'styled-components'
import { IconList } from '../Home/components/Banner/styles'

export const SuccessContainer = styled.main`
  padding: 5rem 10rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-200']};
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 6.375rem;
  }
`

export const InfoPurchase = styled.section`
  width: 32.875rem;
  margin-top: 4.375rem;
  padding: 2.5rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    div {
      margin-left: 0.75rem;

      p {
        line-height: 1.3rem;
      }
    }
  }
`

export const IconListSuccess = styled(IconList)`
  margin: 0.3125rem 0rem;
`
