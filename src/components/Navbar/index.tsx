import Image from 'next/image'

// import MobileMenu from 'components/MobileMenu'

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
        <Image src="/icons/logo.svg" width={92} height={124} alt="logo" />
        <LogoText>Jorb.dev</LogoText>
      </LogoPositionBox>

      <Nav>
        {/* not fully implemented so is better not to show at all */}
        {/* <MobileMenu /> */}
        {/*
        <PageLink href="/" onPage={true}>
          Portifolio
        </PageLink>

        <PageLink href="/services" onPage={false}>
          Services
        </PageLink> */}

        <PageLink href="#contact" onPage={false}>
          Contact
        </PageLink>
      </Nav>

      <GithubIconPositionBox href="https://github.com/JorbFreire">
        <Image src="/icons/github.png" width={53} height={53} alt="github" />
      </GithubIconPositionBox>
    </Container>
  )
}
