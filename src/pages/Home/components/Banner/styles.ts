import styled from 'styled-components'

import bannerBackground from '../../../../assets/banner-background.svg'

export const BannerContainer = styled.div`
  padding: 5.75rem 10rem;

  > div {
    display: flex;
    justify-content: flex-start;

    gap: 3.5rem;

    img {
      max-width: 476px;
      max-height: 360px;
    }
  }
`

export const BannerBackground = styled.div`
  position: absolute;
  background: url('${bannerBackground}') no-repeat top;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

export const BannerText = styled.div`
  max-width: 36.75rem;
  padding-top: 0.125rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  header {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.9rem;
    }

    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-700']};
      line-height: 1.625rem;
    }
  }
`
export const BannerList = styled.div`
  > ul {
    list-style-type: none;
    column-count: 2;
    column-gap: 0rem;

    li {
      color: ${(props) => props.theme['gray-650']};
      display: flex;
      align-items: center;
      gap: 0.75rem;

      &:nth-child(1),
      &:nth-child(3) {
        padding-bottom: 1.25rem;
      }
    }
  }
`
const ICON_COLORS = {
  'yellow-dark': 'yellow-200',
  yellow: 'yellow-150',
  gray: 'gray-650',
  purple: 'purple-450',
} as const

interface IconListProps {
  color: keyof typeof ICON_COLORS
}
export const IconList = styled.span<IconListProps>`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};

  padding: 0.5rem;
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.white};
  }
`
