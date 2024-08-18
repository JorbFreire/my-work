import styled, { css } from 'styled-components'

import { textShadowAnimation, arrowMoveAnimation } from './animations'

interface CallToActionProps {
  size?: 'small' | 'large'
}

export const Container = styled.div`
  height: 910px;
  background-color: ${({ theme }) => theme.pallete.secondary.dark};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    height: 890px;
  }
`

export const ImageBox = styled.main`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  background-image: url('/backgrounds/waves_bottom.png');
  background-size: cover;
  background-attachment: fixed;

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-top: 0;
          padding-bottom: 0;
          padding-right: ${theme.page.horizontal_padding[index]}px;
          padding-left: ${theme.page.horizontal_padding[index]}px;
        }
      `,
    )}
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  max-width: 1440px;
`

export const HeadLine = styled.h1`
  font-size: 9.6rem;
  font-weight: bold;
  line-height: 135%;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.pallete.primary.main};
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints[5].media}px) {
    font-size: 7rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    font-size: 6.4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    font-size: 5%.2;
  }
`

export const CallToActionBox = styled.a`
  display: flex;
  text-decoration: none;
  gap: 8px;

  &:hover *::after {
    content: '';
    width: calc(100% + 16px);
  }
`

export const CallToAction = styled.h2<CallToActionProps>`
  position: relative;
  font-size: ${({ size }) => (size === 'large' ? 5.6 : 3.2)}rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.pallete.grey.light};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  ${textShadowAnimation}

  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    font-size: 4.8rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    font-size: 4rem;
  }
`

export const AnimatedSpan = styled(CallToAction)`
  text-shadow: none;
  animation: ${arrowMoveAnimation} 2s ease-in-out 1s infinite alternate both;
  &::after {
    display: none;
  }
`
