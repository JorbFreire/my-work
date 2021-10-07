import styled from 'styled-components'

const sliderHeight = '49.5vw'
const sliderMaxHeight = '675px'

interface SliderButtonProps {
  side?: 'prev' | 'next'
}

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
  height: ${sliderHeight};
  width: 80vw;
  max-height: ${sliderMaxHeight};
  max-width: 1200px;
`

export const EachSlide = styled.div`
  display: flex;
  height: ${sliderHeight};
  width: 80vw;
  max-height: ${sliderMaxHeight};
  max-width: 1200px;
`

export const SlideButton = styled.button<SliderButtonProps>`
  width: 55px;
  height: auto;
  height: ${sliderHeight};
  max-height: ${sliderMaxHeight};

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
  width: 18vw;
  padding: 24px;
`

export const Title = styled.h1`
  font-size: 4.2rem;
  margin-top: -16px;
  color: #2a373c;
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
  color: #212121;

  strong {
    font-weight: 600;
  }
`

export const SlideImageWrapper = styled.div`
  img,
  div {
    height: ${sliderHeight} !important;
    width: 80vw !important;
    max-height: ${sliderMaxHeight} !important;
    max-width: 1200px !important;
  }
`
