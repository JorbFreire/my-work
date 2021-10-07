import Project from 'layouts/Project'

import chat from '../../assets/jobs/foodzilla-dashboard/chat.png'
import chat2 from '../../assets/jobs/foodzilla-dashboard/chat2.png'
import criar_item from '../../assets/jobs/foodzilla-dashboard/criar_item.png'
import editar_item from '../../assets/jobs/foodzilla-dashboard/editar_item.png'
import impressao from '../../assets/jobs/foodzilla-dashboard/impressao.png'
import menu_e_timer from '../../assets/jobs/foodzilla-dashboard/menu_e_timer.png'
import menu from '../../assets/jobs/foodzilla-dashboard/menu.png'
import pedido from '../../assets/jobs/foodzilla-dashboard/pedido.png'

import criar_produto from '../../assets/jobs/foodzilla-dashboard/gifs/criar_produto.gif'
import mobile_menu from '../../assets/jobs/foodzilla-dashboard/gifs/mobile_menu.gif'
import mobile_pedido from '../../assets/jobs/foodzilla-dashboard/gifs/mobile_pedido.gif'

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

export default function Home() {
  const mockedLinks: Array<Link> = [
    { name: 'github', url: 'https://github.com' },
    { name: 'github', url: 'https://github.com' },
    { name: 'github', url: 'https://github.com' },
  ]

  const previewImages: Array<PreviewImage> = [
    {
      type: 'image',
      content: chat,
    },
    {
      type: 'image',
      content: chat2,
    },
    {
      type: 'image',
      content: criar_item,
    },
    {
      type: 'image',
      content: editar_item,
    },
    {
      type: 'image',
      content: impressao,
    },
    {
      type: 'image',
      content: menu_e_timer,
    },
    {
      type: 'image',
      content: menu,
    },
    {
      type: 'image',
      content: pedido,
    },
    {
      type: 'gif',
      content: criar_produto,
    },
    {
      type: 'gif',
      content: mobile_menu,
    },
    {
      type: 'gif',
      content: mobile_pedido,
    },
  ]

  return (
    <Project
      title={''}
      description="This project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzillaThis project was build to foodzilla"
      previews={previewImages}
      links={mockedLinks}
    >
      <p>
        Foodzilla
        <br />
        landing page
      </p>
    </Project>
  )
}
