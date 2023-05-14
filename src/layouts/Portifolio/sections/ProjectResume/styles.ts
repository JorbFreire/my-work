import styled, { css } from 'styled-components'

export interface IContainerProps {
  backgroundColor: HexaColorStringType
  reverse?: boolean
}

export const Container = styled.section<IContainerProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  height: 100vh;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ContentBox = styled.div`
  padding: 0;
  width: 33%;
  /* background-color: red; */

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-top: ${theme.page.vertical_padding[index]}px;
          padding-bottom: ${theme.page.vertical_padding[index] / 2}px;
          padding-right: ${theme.page.horizontal_padding[index] / 2}px;
          padding-left: ${theme.page.horizontal_padding[index] / 2}px;
        }
      `,
    )}
`

export const ProjectTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-bottom: ${theme.page.vertical_padding[index]}px;
        }
      `,
    )}
`

export const DescriptionText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.1em;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export const PreviewBox = styled.div`
  display: block;
  width: 77%;
  height: 100%;
`
