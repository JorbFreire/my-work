import Project from 'layouts/Project'

import Chat from '../../assets/Chat.png'

interface StaticRequire {
  default: StaticImageData
}

interface PreviewImage {
  type: 'image' | 'gif' | 'video'
  content: StaticImageData | StaticRequire
}

export default function Home() {
  const previewImages: Array<PreviewImage> = [
    {
      type: 'image',
      content: Chat,
    },
  ]
  return (
    <Project
      title="Foodzilla &#10;&#13;landing page"
      description="This project was build to foodzilla"
      previews={previewImages}
    />
  )
}
