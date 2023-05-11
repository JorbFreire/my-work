import Image from 'next/image'

import {
  Container,
  ContentBox,
  PreviewBox,
  ProjectTitle,
  DescriptionText,
} from './styles'
import type { IContainerProps } from './styles'

export interface IProjectResumeProps extends IContainerProps {
  title: string
  descriptionBlocks: Array<string>
  previewImage: ImageSrcType
}

export default function ProjectResume({
  title,
  descriptionBlocks,
  previewImage,
  backgroundColor,
  reverse,
}: IProjectResumeProps) {
  return (
    <Container reverse={reverse} backgroundColor={backgroundColor}>
      <ContentBox>
        <ProjectTitle>{title}</ProjectTitle>
        {descriptionBlocks.map((text) => (
          <DescriptionText key={Math.random()}>{text}</DescriptionText>
        ))}
      </ContentBox>

      <PreviewBox>
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
