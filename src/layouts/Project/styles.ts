import styled from 'styled-components'

export const Container = styled.main`
  background-color: #c79961;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const MainBlock = styled.div`
  display: flex;
`

export const Slider = styled.section`
  background-color: #75adc7;
  width: 512px;
  height: 384px;
`

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
`

export const Title = styled.h1`
  font-size: 2.6rem;
  margin-top: -16px;
`

export const ProjectLinks = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  font-size: 1.8rem;
`

export const ProjectLink = styled.a`
  background-color: #546e7a;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
`

export const Description = styled.p`
  margin-top: 16px;
  width: 100%;
  max-width: 864px;
  font-size: 1.6rem;
`
