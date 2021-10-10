import Link from 'next/link'
import Image from 'next/image'
import logo from 'assets/icons/logo.svg'
import githubIcon from 'assets/icons/github.png'

import {
  Container,
  GithubIconPositionBox,
  LogoPositionBox,
  ImageContainer,
  Nav,
  PageLink,
} from './styles'
export default function Navbar() {
  return (
    <Container>
      <LogoPositionBox>
        <ImageContainer size="large">
          <Image src={logo} objectFit="contain" layout="responsive" />
        </ImageContainer>
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
          <Image src={githubIcon} objectFit="contain" layout="responsive" />
        </ImageContainer>
      </GithubIconPositionBox>
    </Container>
  )
}
