import styled from 'styled-components'

const Container = styled.div`
  font-size: 200px;
`

const H2 = styled.h2``

const Span = styled.h2`
  transform: translate(200px);
`

export default function PageTest() {
  return (
    <Container>
      <H2>
        <Span>ok</Span>
        hello
      </H2>
    </Container>
  )
}
