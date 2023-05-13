import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px 128px;
  background-color: #2a373c;
  gap: 32px;
`

export const ContactBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: calc(720px - 16px);
`

export const Title = styled.h3`
  font-weight: 400;
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  color: #fff;
`

export const Button = styled.button`
  width: fit-content;
  background: none;
  color: #fff;
  border: 2px solid #f8a9b3;
  padding: 16px 32px;
  font-size: 1.8rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-top: 32px;
  align-self: flex-end;
`

export const ArtBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  min-height: 100%;
  max-width: calc(720px - 16px);
`
