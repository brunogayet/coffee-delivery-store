import styled from 'styled-components'

export const StoreContainer = styled.div`
  padding: 2rem 10rem;

  header {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.6rem;
    }
  }
`

export const StoreList = styled.main`
  padding-top: 3.375rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  row-gap: 2.5rem;
  column-gap: 2rem;
`
