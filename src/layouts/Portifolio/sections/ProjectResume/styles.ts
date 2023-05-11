import styled from 'styled-components'

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
  padding: 32px;
  padding-top: 54px;
  width: 33%;
`

export const ProjectTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-bottom: 32px;
`

export const DescriptionText = styled.p`
  font-size: 1.6rem;
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
  background-color: red;
`
