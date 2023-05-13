import styled, { css } from 'styled-components'

const textCSS = css`
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  color: #ffffff;
`

const inputCSS = css`
  width: 100%;
  background: none;
  border: 2px solid #f8a9b3;
  border-radius: 15px;
  padding: 16px 32px;
  ${textCSS}

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transition: 0.16s;
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
  transition: 0.16s;
  cursor: text;
  ${textCSS}
`

export const TextfieldInput = styled.input`
  ${inputCSS}
`

export const TextareaInput = styled.textarea`
  min-width: 100%;
  ${inputCSS}
`
