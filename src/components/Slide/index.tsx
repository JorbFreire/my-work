import { useState } from 'react'

import { Container, SlideImage, ImageSelector, DotButton } from './styles'

interface ISlideProps extends IPreviewBox {
  slideImages: Array<ImageSrcType>
  $slideSelectorColor: HexaColorStringType
}

export default function Slide({
  slideImages,
  $slideSelectorColor,
  $reverse,
  $isMaxSize,
}: ISlideProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  return (
    <Container>
      {slideImages.map((image, index) => (
        <SlideImage
          $isSelected={selectedImageIndex == index}
          key={index}
          $reverse={$reverse}
          $isMaxSize={$isMaxSize}
          src={image}
          alt=""
        />
      ))}
      <ImageSelector>
        {slideImages.map((_, index) => (
          <DotButton
            key={index}
            $isSelected={selectedImageIndex == index}
            $color={$slideSelectorColor}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </ImageSelector>
    </Container>
  )
}
