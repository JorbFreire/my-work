import styled, { css } from 'styled-components'
import Link from 'next/link'

interface PageLinkProps {
  onPage: boolean
}

const onPageCSS = css`
  color: ${({ theme }) => theme.pallete.primary.main};
  font-weight: bold;
`

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
  @media (max-width: ${({ theme }) => theme.breakpoints[6].media}px) {
    right: -40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[5].media}px) {
    right: -20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    position: relative;
    order: 3;
    top: 0;
    right: 0;
  }
`

export const LogoPositionBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 66px;
  @media (max-width: ${({ theme }) => theme.breakpoints[5].media}px) {
    img {
      width: 48px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    margin-top: 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    order: 2;
  }
`

export const LogoText = styled.h2`
  font-weight: 700;
  font-size: 6.4rem;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.pallete.primary.main};
  margin-left: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints[5].media}px) {
    font-size: 3.6rem;
    margin-left: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 66px;
  width: 100%;
  max-width: 600px;
  margin-right: 60px;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints[5].media}px) {
    max-width: 480px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[4].media}px) {
    margin: 0 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    order: 1;
    width: fit-content;
    margin: 0;
  }
`

export const PageLink = styled(Link)<PageLinkProps>`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.pallete.grey.light};
  text-decoration: none;
  ${({ onPage }) => onPage && onPageCSS}

  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    display: none;
  }
`
