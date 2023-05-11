import Link from 'next/link'
import Image from 'next/image'

import {
  Container,
  GithubIconPositionBox,
  LogoPositionBox,
  ImageContainer,
  LogoText,
  Nav,
  PageLink,
} from './styles'

export default function Navbar() {
  return (
    <Container>
      <LogoPositionBox>
        <ImageContainer size="large">
          <Image
            src="/icons/logo.svg"
            objectFit="contain"
            width={92}
            height={124}
          />
        </ImageContainer>
        <LogoText>Jorb.dev</LogoText>
      </LogoPositionBox>

      <Nav>
        <Link href="/">
          <PageLink onPage={true}>Portifolio</PageLink>
        </Link>

        <Link href="/">
          <PageLink onPage={false}>Services</PageLink>
        </Link>

        <Link href="/">
          <PageLink onPage={false}>Resume</PageLink>
        </Link>

        <Link href="/">
          <PageLink onPage={false}>Contact</PageLink>
        </Link>
      </Nav>

      <GithubIconPositionBox>
        <ImageContainer size="small">
          {/* <Image src="/icons/githubIcon" objectFit="contain" layout="fill" /> */}
        </ImageContainer>
      </GithubIconPositionBox>
    </Container>
  )
}
