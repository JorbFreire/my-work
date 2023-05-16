import styled, { css } from 'styled-components'

interface CallToActionProps {
  size?: 'small' | 'large'
}

interface ImageBoxProps {
  imageAnchor: 'top' | 'bottom'
}

export const Container = styled.div`
  height: 910px;
  background-color: ${({ theme }) => theme.pallete.secondary.dark};
  box-shadow: 0px -15px 120px -15px rgba(0, 0, 0, 0.25);
`

export const ImageBox = styled.main<ImageBoxProps>`
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
`

export const CallToAction = styled.h2<CallToActionProps>`
  font-size: ${({ size }) => (size === 'large' ? 5.6 : 3.2)}rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.pallete.grey.light};

  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    font-size: 4.8rem;
  }
`
