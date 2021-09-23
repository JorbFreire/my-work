import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import {
  Container,
  Slider,
  MainBlock,
  MainTextContainer,
  Title,
  ProjectLinks,
  ProjectLink,
  Description,
} from './styles'

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
}

const Main = ({
  title = 'Project Title',
  description = 'Project Description',
  previews,
  links,
}: Main) => (
  <Container>
    <MainBlock>
      <Slider className="slide-container">
        <Slide indicators={true}>
          <div className="each-slide">
            {previews.map(({ type, content }, index) =>
              type === 'video' ? (
                <h1>video</h1>
              ) : (
                <Image
                  key={index}
                  src={content}
                  alt="Picture of the author"
                  width={512}
                  height={384}
                />
              ),
            )}
          </div>
        </Slide>
      </Slider>

      <MainTextContainer>
        <Title>{title}</Title>
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

export default Main
