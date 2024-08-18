import styled from 'styled-components'

import Image from 'next/image'

interface ISlideImageProps extends IPreviewBox {
  $isSelected: boolean
}

interface IDotButtonProps {
  $color: HexaColorStringType
  $isSelected: boolean
}

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const SlideImage = styled(Image)<ISlideImageProps>`
  ${({ $isSelected }) => !$isSelected && 'display: none;'}
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: ${({ $reverse }) =>
    $reverse ? 'right center' : 'left center'};

  mask-image: linear-gradient(
    to ${({ $reverse }) => ($reverse ? 'right' : 'left')},
    rgb(0 0 0 / 90%),
    transparent
  );

  ${({ $isMaxSize }) => !$isMaxSize && 'mask-image : none;'}
  transition: mask-image 0.3s ease-in-out;
`

export const ImageSelector = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  gap: 8px;
  bottom: 64px;
`

export const DotButton = styled.button<IDotButtonProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${({ $color, $isSelected }) =>
    $isSelected ? $color : 'none'};
  border: solid 2px ${({ $color }) => $color};
  opacity: 0.67;

  &:hover {
    opacity: 0.87;
    transform: translateY(-2px);
  }

  transition: opacity 0.2s;
  transition: transform 0.2s;
  transition: background-color 0.2s;
`
