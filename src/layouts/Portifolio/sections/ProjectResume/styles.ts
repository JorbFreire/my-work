import styled, { css } from 'styled-components'

export interface IContainerProps {
  $backgroundColor: HexaColorStringType
  $reverse?: boolean
}

export interface ITextComponentsProps {
  $textColor: HexaColorStringType
  $isVisible?: boolean
}

interface IContentBox {
  $isVisible: boolean
}

interface IExpandImageButton extends IPreviewBox {
  $dark?: boolean
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
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  height: 100vh;
  width: 100%;

  overflow: hidden;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  z-index: 2;

  ${firstSectionStyle}
`

export const ContentBox = styled.div<IContentBox>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      width: 0;
      overflow: hidden;
    `}
  transition: width 0.3s ease;

  ${({ theme, $isVisible }) =>
    $isVisible &&
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

export const ProjectTitle = styled.h3<ITextComponentsProps>`
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: ${({ $textColor }) => $textColor};

  ${({ $isVisible }) => !$isVisible && 'opacity: 0;'}
  transition: opacity 0.2s ease;

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-bottom: ${theme.page.vertical_padding[index]}px;
        }
      `,
    )};
`

export const DescriptionText = styled.p<ITextComponentsProps>`
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: ${({ $textColor }) => $textColor};

  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export const PreviewBox = styled.div<IPreviewBox>`
  position: relative;
  display: flex;
  align-items: center;

  height: 100%;
  width: 50%;

  ${({ $isMaxSize }) => !$isMaxSize && 'width: 100%;'}
  transition: width 0.3s ease;
`

export const ExpandImageButton = styled.button<IExpandImageButton>`
  position: absolute;

  width: 128px;
  height: 128px;
  border-radius: 50%;
  transition: transform 0.5s, opacity 1s;
  background-color: ${({ $dark, theme }) =>
    $dark ? '#ffffff' : theme.pallete.secondary.dark}AA;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: transform 0.2s, opacity 1s;
  }

  &:active::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: 0.2s;
  }

  ${({ $reverse }) => ($reverse ? 'right' : 'left')}: 64px;
  img {
    width: 128px;
    height: 128px;
  }
`
