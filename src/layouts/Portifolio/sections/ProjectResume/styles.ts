import styled, { css } from 'styled-components'

export interface IContainerProps {
  backgroundColor: HexaColorStringType
  reverse?: boolean
}

export interface ITextComponentsProps {
  textColor: HexaColorStringType
}

interface IPreviewBox {
  reverse?: boolean
}

const firstSectionStyle = css`
  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          &:first-of-type,
          &:first-of-type img {
            border-radius: ${theme.page.external_radius[index]}
              ${theme.page.external_radius[index]} 0 0;
          }
          &:first-of-type {
            box-shadow: 0 -8px 16px 4px rgba(0, 0, 0, 0.37);
          }
        }
      `,
    )}
`

export const Container = styled.section<IContainerProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  height: 100vh;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  z-index: 2;

  ${firstSectionStyle}
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          width: ${theme.preview.description_size[index]}%;
          padding-top: ${theme.page.vertical_padding[index]}px;
          padding-bottom: ${theme.page.vertical_padding[index] / 2}px;
          padding-right: ${theme.page.horizontal_padding[index] / 2}px;
          padding-left: ${theme.page.horizontal_padding[index] / 2}px;
        }
      `,
    )}
`

export const ProjectTitle = styled.h3<ITextComponentsProps>`
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: ${({ textColor }) => textColor};

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-bottom: ${theme.page.vertical_padding[index]}px;
        }
      `,
    )}
`

export const DescriptionText = styled.p<ITextComponentsProps>`
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${({ textColor }) => textColor};

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export const PreviewBox = styled.div<IPreviewBox>`
  display: block;
  height: 100%;

  img {
    mask-image: linear-gradient(
      to ${({ reverse }) => (reverse ? 'right' : 'left')},
      rgb(0 0 0 / 90%),
      transparent
    );
  }

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          width: ${theme.preview.image_size[index]}%;
        }
      `,
    )}
`
