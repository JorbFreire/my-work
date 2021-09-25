import styled from 'styled-components'

export const Container = styled.main`
  background-color: #75adc761;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const MainBlock = styled.div`
  display: flex;
`

export const Slider = styled.section`
  height: 49.5vw;
  width: 80vw;
  max-height: 675px;
  max-width: 1200px;
`

export const EachSlide = styled.div`
  display: flex;
  height: 49.5vw;
  width: 80vw;
  max-height: 675px;
  max-width: 1200px;
`

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18vw;
  padding: 24px;
`

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-top: -16px;
`

export const ProjectLinks = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  font-size: 1.8rem;
`

export const ProjectLink = styled.a`
  background-color: #546e7a;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
`

export const Description = styled.p`
  width: calc(80vw + 15vw);
  max-width: calc(1200px + 15vw);
  margin-top: 40px;
  font-size: 1.6rem;
`

export const SlideImageWrapper = styled.div`
  img,
  div {
    height: 49.5vw !important;
    width: 80vw !important;
    max-height: 675px !important;
    max-width: 1200px !important;
  }
`
