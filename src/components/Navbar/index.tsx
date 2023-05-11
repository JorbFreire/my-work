import Link from 'next/link'
import Image from 'next/image'

import {
  Container,
  GithubIconPositionBox,
  LogoPositionBox,
  LogoText,
  Nav,
  PageLink,
} from './styles'

export default function Navbar() {
  return (
    <Container>
      <LogoPositionBox>
        <Image
          src="/icons/logo.svg"
          objectFit="contain"
          width={92}
          height={124}
        />
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
        <Image
          src="/icons/github.png"
          objectFit="contain"
          width={53}
          height={53}
        />
      </GithubIconPositionBox>
    </Container>
  )
}
