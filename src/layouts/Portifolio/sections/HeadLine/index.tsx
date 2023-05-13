import Navbar from 'components/Navbar'

import {
  Container,
  ImageBox,
  ContentBox,
  HeadLine,
  CallToAction,
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
            <CallToAction size="large">👇 CHECK OUT MY WORK.</CallToAction>
          </div>

          <div />
        </ContentBox>
      </ImageBox>
    </Container>
  )
}
