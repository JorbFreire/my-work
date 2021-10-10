import styled from 'styled-components'

interface ImageContainerProps {
  size: 'small' | 'large'
}

interface PageLinkProps {
  onPage: boolean
}

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 128px;
  padding-top: 6px;
`

export const GithubIconPositionBox = styled.div`
  position: absolute;
  right: -80px;
`

export const LogoPositionBox = styled.div`
  position: absolute;
  left: 0;
`

// The images sizes at this navbar are controled on this component
export const ImageContainer = styled.div<ImageContainerProps>`
  display: block;
  width: ${({ size }) => (size === 'large' ? 100 : 52)}px;
  height: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
`

export const Nav = styled.nav``

export const PageLink = styled.a<PageLinkProps>`
  font-size: 2.4rem;
  color: #fff;
  text-decoration: none !important;
  ${({ onPage }) => (onPage ? `color: #F8A9B3; font-weight: bold;` : '')}
  margin-right: 60px;
`
