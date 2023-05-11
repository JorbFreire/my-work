import styled from 'styled-components'

interface CallToActionProps {
  size?: 'small' | 'large'
}

interface ImageBoxProps {
  imageAnchor: 'top' | 'bottom'
}

export const Container = styled.div`
  height: 910px;
  background-color: #2a373c;
  box-shadow: 0px -15px 120px -15px rgba(0, 0, 0, 0.25);
`

export const ImageBox = styled.main<ImageBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 269px;

  background-image: url('/backgrounds/waves_top.png');
  background-size: cover;
  background-attachment: fixed;
`

export const HeadLine = styled.h1`
  font-size: 9.6rem;
  font-weight: bold;
  line-height: 135%;
  letter-spacing: 0.1em;
  color: #f8a9b3;
  margin-bottom: 56px;
`

export const CallToAction = styled.h2<CallToActionProps>`
  font-size: ${({ size }) => (size === 'large' ? 5.6 : 3.2)}rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #fff;
`
