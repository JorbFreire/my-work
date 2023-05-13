import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { SlideImageWrapper } from './styles'

interface StaticRequire {
  default: StaticImageData
}

interface ImageProps {
  key: number
  src: StaticImageData | StaticRequire
  alt: string
  layout?: 'responsive' | 'fill'
}

export const SlideImage = (props: ImageProps) => (
  <SlideImageWrapper>
    <Image {...props} fill={true} style={{ objectFit: 'contain' }} />
  </SlideImageWrapper>
)
