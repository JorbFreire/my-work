import { css, keyframes } from 'styled-components'

export const textShadowAnimation = css`
  @keyframes shadow-move {
    0% {
      text-shadow: -2px -2px 8px ${({ theme }) => theme.pallete.primary.light};
    }
    20% {
      text-shadow: 2px -2px 8px ${({ theme }) => theme.pallete.primary.light};
    }
    40% {
      text-shadow: 2px 2px 8px ${({ theme }) => theme.pallete.primary.main};
    }
    80% {
      text-shadow: -2px 2px 8px ${({ theme }) => theme.pallete.primary.dark};
    }
    100% {
      text-shadow: -2px -2px 8px ${({ theme }) => theme.pallete.primary.light};
    }
  }
  animation: shadow-move 3s linear infinite;
`

export const arrowMoveAnimation = keyframes`
  0% {
    transform: translateY(-8px);
  }
  20% {
    transform: translateY(16px);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(16px);
  }
  100% {
    transform: translateY(-8px);
  }
`
