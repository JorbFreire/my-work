import styled from 'styled-components'
import Link from 'next/link'

interface PageLinkProps {
  onPage: boolean
}

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`

export const GithubIconPositionBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  height: 124px;
  top: 66px;
  right: -80px;
`

export const LogoPositionBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 66px;
`

export const LogoText = styled.h2`
  font-weight: 700;
  font-size: 6.4rem;
  letter-spacing: 0.2em;
  color: #f8a9b3;
  margin-left: 32px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 66px;
`

export const PageLink = styled(Link)<PageLinkProps>`
  font-size: 2.4rem;
  color: #fff;
  text-decoration: none !important;
  ${({ onPage }) => (onPage ? `color: #F8A9B3; font-weight: bold;` : '')}
  margin-right: 60px;
`
