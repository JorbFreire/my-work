import styled, { css } from 'styled-components'

const textCSS = css`
  font-size: 1.8rem;
  letter-spacing: 0.1em;
`

const inputCSS = css`
  width: 100%;
  padding: 16px 32px;

  border: 2px solid;
  border-color: ${({ theme }) => theme.pallete.grey.light};
  border-radius: 16px;
  background: none;
  color: ${({ theme }) => theme.pallete.grey.light};

  outline: 0;
  transition: border-color 0.3s;
  ${textCSS}

  & + label {
    color: ${({ theme }) => theme.pallete.grey.light};
  }

  &:focus {
    transition: border-color 0.3s;
    border-color: ${({ theme }) => theme.pallete.primary.main};
    & + label {
      transition: transform 0.2s;
      /* transition: color 0.3s; */
      color: ${({ theme }) => theme.pallete.primary.main};
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transition: transform 0.2s;
      transform: translateY(-42px);
    }
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 32px;
`

export const LabelText = styled.label`
  position: absolute;
  top: 16px;
  left: 32px;
  padding: 2px;

  transition: transform 0.2s;
  cursor: text;
  ${textCSS}
`

export const TextfieldInput = styled.input`
  ${inputCSS}
`

export const TextareaInput = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  ${inputCSS}
`
