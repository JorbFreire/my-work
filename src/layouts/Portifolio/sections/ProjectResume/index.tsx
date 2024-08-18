import { useState } from 'react'
import Image from 'next/image'

import {
  Container,
  ContentBox,
  PreviewBox,
  ExpandImageButton,
  ProjectTitle,
  DescriptionText,
} from './styles'
import type { IContainerProps, ITextComponentsProps } from './styles'
import Slide from 'components/Slide'

export interface IProjectResumeProps
  extends IContainerProps,
    ITextComponentsProps {
  id?: string
  title: string
  descriptionBlocks: Array<string>
  slideImages: Array<ImageSrcType>
  $slideSelectorColor: HexaColorValueType
}

export default function ProjectResume({
  id,
  title,
  descriptionBlocks,
  slideImages,
  $backgroundColor,
  $textColor,
  $slideSelectorColor,
  $reverse,
}: IProjectResumeProps) {
  const [isDesciptionVisible, setIsDesciptionVisible] = useState(true)

  return (
    <Container id={id} $reverse={$reverse} $backgroundColor={$backgroundColor}>
      <ContentBox $isVisible={isDesciptionVisible}>
        <ProjectTitle $isVisible={isDesciptionVisible} $textColor={$textColor}>
          {title}
        </ProjectTitle>
        {descriptionBlocks.map((text) => (
          <DescriptionText
            $isVisible={isDesciptionVisible}
            key={Math.random()}
            $textColor={$textColor}
          >
            {text}
          </DescriptionText>
        ))}
      </ContentBox>

      <PreviewBox $isMaxSize={isDesciptionVisible} $reverse={$reverse}>
        <Slide
          slideImages={slideImages}
          $slideSelectorColor={$slideSelectorColor}
          $reverse={$reverse}
          $isMaxSize={isDesciptionVisible}
        />

        <ExpandImageButton
          $reverse={$reverse}
          $dark={$textColor == '#76464c' ? true : false}
          onClick={() => setIsDesciptionVisible(!isDesciptionVisible)}
        >
          <Image
            width={20}
            height={20}
            src={`/icons/expand_content${
              $textColor == '#76464c' ? '_dark' : ''
            }.svg`}
            alt=""
          />
        </ExpandImageButton>
      </PreviewBox>
    </Container>
  )
}
