import styled from 'styled-components'

interface SliderButtonProps {
  side?: 'prev' | 'next'
}

const sliderWidth = 70
const sliderMaxWidth = 1400
const sliderHeight = sliderWidth * 0.5625
const sliderMaxHeight = sliderMaxWidth * 0.5625

export const Container = styled.main`
  background-color: #2a373c;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
`

export const BGImage = styled.div`
  background: url('/backgrounds/waves_top.png') no-repeat;
  background-size: cover;
  background-attachment: scroll;
  padding: 20px 80px 0;
  @media (min-width: 2400px) {
    padding: 40px 320px 0;
  }
  @media (max-width: 1920px) {
    padding: 40px 80px 0;
  }
  @media (max-width: 1600px) {
    padding: 20px 40px 0;
  }
  @media (max-width: 700px) {
    padding: 0 20px 0;
  }
`

export const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Slider = styled.section`
  --slider-width: ${sliderWidth}vw;
  --slider-max-width: ${sliderMaxWidth}px;
  --slider-height: ${sliderHeight}vw;
  --slider-max-height: ${sliderMaxHeight}px;

  height: var(--slider-height);
  width: var(--slider-width);
  max-height: var(--slider-max-height);
  max-width: var(--slider-max-width);

  @media (max-width: 1920px) {
    --slider-width: ${sliderWidth * 0.96}vw;
    --slider-height: ${sliderHeight * 0.96}vw;
  }
  @media (max-width: 1024px) {
    --slider-width: ${sliderWidth * 0.82}vw;
    --slider-height: ${sliderHeight * 0.82}vw;
  }
  @media (max-width: 700px) {
    --slider-width: ${sliderWidth * 1.2}vw;
    --slider-height: ${sliderHeight * 1.2}vw;
  }
`

export const EachSlide = styled.div`
  display: flex;
  height: var(--slider-height);
  width: var(--slider-width);
  max-height: var(--slider-max-height);
  max-width: var(--slider-max-width);
`

export const SlideButton = styled.button<SliderButtonProps>`
  width: 55px;
  height: auto;
  height: var(--slider-height);
  max-height: var(--slider-max-height);

  background: none;
  border: none;

  ${({ side }) => (side === 'prev' ? 'margin-right' : 'margin-left')}: -55px;

  transition: box-shadow 0.3s;
  border-radius: ${({ side }) =>
    side === 'prev' ? '20px 0 0 20px' : '0 20px 20px 0'};
  :hover {
    box-shadow: inset ${({ side }) => (side === 'prev' ? '50px' : '-50px')} 0px
      50px -30px rgba(255, 255, 255, 0.61);
  }

  img {
    border-radius: 50%;
    height: 45px;
    transform: rotate(${({ side }) => (side === 'prev' ? '180deg' : '0deg')});
  }
`

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22%;

  @media (max-width: 1024px) {
    width: 32%;
  }
  @media (max-width: 700px) {
    --slider-width: ${sliderWidth * 1.2}vw;
    --slider-height: ${sliderHeight * 1.2}vw;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 40px 0 20px;
  }
`

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-top: -16px;
  color: #f8a9b3;
  @media (max-width: 700px) {
    margin-top: 0;
  }
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
  width: 100%;
  margin-top: 40px;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 20px;

  strong {
    font-weight: 600;
  }
`

export const SlideImageWrapper = styled.div`
  img,
  div {
    height: var(--slider-height) !important;
    width: var(--slider-width) !important;
    max-height: var(--slider-max-height) !important;
    max-width: var(--slider-max-width) !important;
  }
`
