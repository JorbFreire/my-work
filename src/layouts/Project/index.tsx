import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import {
  Container,
  Slider,
  EachSlide,
  MainBlock,
  MainTextContainer,
  Title,
  ProjectLinks,
  ProjectLink,
  Description,
} from './styles'

import { SlideImage } from './SlideImageWithWrapper'

interface StaticRequire {
  default: StaticImageData
}

interface PreviewImage {
  type: 'image' | 'gif' | 'video'
  content: StaticImageData | StaticRequire
}

interface Link {
  name: string
  url: string
}

interface Main {
  title: string
  description: string
  previews: Array<PreviewImage>
  links?: Array<Link>
  children?: JSX.Element | JSX.Element[]
}

const Project = ({
  title = 'Project Title',
  description = 'Project Description',
  previews,
  links,
  children,
}: Main) => (
  <Container>
    <MainBlock>
      <Slider className="slide-container">
        <Slide indicators={true}>
          {previews.map(({ type, content }, index) =>
            type === 'video' ? (
              <div className="each-slide">
                <h1>video</h1>
              </div>
            ) : (
              <EachSlide className="each-slide">
                <SlideImage
                  key={index}
                  src={content}
                  alt="Picture of the author"
                  layout="responsive"
                />
              </EachSlide>
            ),
          )}
        </Slide>
      </Slider>

      <MainTextContainer>
        <Title>{children ? children : title}</Title>
        <ProjectLinks>
          {links &&
            links.map(({ name, url }) => (
              <ProjectLink key={name} href={url}>
                {url}
              </ProjectLink>
            ))}
        </ProjectLinks>
      </MainTextContainer>
    </MainBlock>

    <Description>{description}</Description>
  </Container>
)

export default Project
