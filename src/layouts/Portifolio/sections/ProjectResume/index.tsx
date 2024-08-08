import Image from 'next/image'

import {
  Container,
  ContentBox,
  PreviewBox,
  ProjectTitle,
  DescriptionText,
} from './styles'
import type { IContainerProps, ITextComponentsProps } from './styles'

export interface IProjectResumeProps
  extends IContainerProps,
    ITextComponentsProps {
  id?: string
  title: string
  descriptionBlocks: Array<string>
  previewImage: ImageSrcType
}

export default function ProjectResume({
  id,
  title,
  descriptionBlocks,
  previewImage,
  backgroundColor,
  textColor,
  reverse,
}: IProjectResumeProps) {
  return (
    <Container id={id} reverse={reverse} backgroundColor={backgroundColor}>
      <ContentBox>
        <ProjectTitle textColor={textColor}>{title}</ProjectTitle>
        {descriptionBlocks.map((text) => (
          <DescriptionText key={Math.random()} textColor={textColor}>
            {text}
          </DescriptionText>
        ))}
      </ContentBox>

      <PreviewBox reverse={reverse}>
        <Image
          alt="alt"
          src={previewImage}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: reverse ? 'right center' : 'left center',
          }}
        />
      </PreviewBox>
    </Container>
  )
}
