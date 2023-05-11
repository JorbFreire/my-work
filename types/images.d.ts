declare type ImageSrcType =
  | { default: StaticImageData }
  | StaticImageData
  | `/${string}.${'svg' | 'png' | 'jpg' | 'jpeg' | 'gif'}`
