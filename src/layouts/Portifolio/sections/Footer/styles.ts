import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.secondary.dark};

  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint: breakpointType, index: number) => css`
        @media (min-width: ${breakpoint.media}px) {
          padding-top: ${theme.page.vertical_padding[index]}px;
          padding-bottom: ${theme.page.vertical_padding[index]}px;
          padding-right: ${theme.page.horizontal_padding[index]}px;
          padding-left: ${theme.page.horizontal_padding[index]}px;
          gap: ${theme.page.vertical_padding[index]}px;
        }
      `,
    )}
`

export const ContactBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: calc(720px - 16px);

  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: 400;
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.pallete.primary.main};
`

export const Button = styled.button`
  align-self: flex-end;
  width: fit-content;
  padding: 16px 32px;
  margin-top: 32px;

  background: none;
  color: ${({ theme }) => theme.pallete.grey.light};

  border: 2px solid;
  border-color: ${({ theme }) => theme.pallete.primary.main};
  border-radius: 15px;

  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;

  transition: color 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.pallete.primary.main};
  }
`

export const ArtBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-height: 100%;
  width: 50%;
  max-width: calc(720px - 16px);

  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    display: none;
  }
`
