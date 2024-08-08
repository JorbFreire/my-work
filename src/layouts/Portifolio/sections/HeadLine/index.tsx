import Navbar from 'components/Navbar'

import {
  Container,
  ImageBox,
  ContentBox,
  HeadLine,
  CallToActionBox,
  CallToAction,
  AnimatedSpan,
} from './styles'

export default function Portifolio() {
  return (
    <Container>
      <ImageBox imageAnchor="top">
        <ContentBox>
          <Navbar />

          <div>
            <HeadLine>
              High quality websites {'&'} <br /> web apps
            </HeadLine>
            <CallToActionBox href="#first_project">
              <AnimatedSpan size="large">👇 </AnimatedSpan>
              <CallToAction size="large">CHECK OUT MY WORK.</CallToAction>
            </CallToActionBox>
          </div>

          <div />
        </ContentBox>
      </ImageBox>
    </Container>
  )
}
