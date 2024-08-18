import styled from 'styled-components'

interface ITextButtonProps {
  $marginTop: number
  $textColor?: HexaColorStringType
  $alignAtEnd?: boolean
}

const TextButton = styled.button<ITextButtonProps>`
  ${({ $alignAtEnd }) => $alignAtEnd && 'align-self: flex-end;'}
  width: fit-content;
  padding: 16px 32px;
  margin-top: ${({ $marginTop }) => $marginTop}px;

  background: none;
  color: ${({ theme, $textColor }) =>
    $textColor ? $textColor : theme.pallete.grey.light};

  border: 2px solid;
  border-color: ${({ theme, $textColor }) =>
    $textColor ? $textColor : theme.pallete.primary.main};
  border-radius: 16px;

  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;

  transition: color 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme, $textColor }) =>
      $textColor ? $textColor : theme.pallete.primary.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[3].media}px) {
    &:active {
      transform: scale(0.98);
    }
  }
`

export default TextButton
