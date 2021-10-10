import Navbar from 'components/Navbar'

import { Container, ImageBox, HeadLine, CallToAction } from './styles'

export default function Portifolio() {
  return (
    <Container>
      <ImageBox imageAnchor="top">
        <Navbar />
        <div>
          <HeadLine>High quality websites {'&'} web apps</HeadLine>
          <CallToAction>👇 CHECK OUT MY WORK.</CallToAction>
        </div>

        <div />
      </ImageBox>
    </Container>
  )
}
