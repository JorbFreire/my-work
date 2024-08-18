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
      <ContentBox>
        <Navbar />

        <div>
          <HeadLine>
            High quality websites {'&'} <br /> web apps
          </HeadLine>
          <CallToActionBox href="#first">
            <AnimatedSpan size="large">👇 </AnimatedSpan>
            <CallToAction size="large">CHECK OUT MY WORK.</CallToAction>
          </CallToActionBox>
        </div>

        <div />
      </ContentBox>
    </Container>
  )
}
