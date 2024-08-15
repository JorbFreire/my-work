import type { IProjectResumeProps } from './sections/ProjectResume'
import FoodZillaDashboardPreviewImage from 'assets/jobs/foodzilla-dashboard/pedido.png'
import FoodZillaLandingPagePreviewImage from 'assets/jobs/foodzilla-dashboard/menu.png'

const projectsList: Array<IProjectResumeProps> = [
  {
    id: '1',
    title: 'Foodzilla Dashboard',
    descriptionBlocks: [
      'This client was a delivery plataform requesting a dashboard so they paterns could menage they orders consuming they existing API.',
      'I build it from scratch with only some visual references and briefing from the responsable.',
      'I made sure they paterns could easily checkout for new orders in realtime, accept or decline this orders and latter review it. They could also comunicate with they clients by the order status or directly through an built-in real time chat.',
      'This project was built with ReactJS, socket-io, material-ui and a high level of custumization on material-ui.',
    ],
    previewImage: FoodZillaDashboardPreviewImage,
    $backgroundColor: '#fff',
    $textColor: '#76464c',
    $reverse: true,
  },
  {
    id: '2',
    title: 'Foodzilla Landing Page',
    descriptionBlocks: [
      'Latter Foodzilla requested a landing page to attract new partners. I ended up being responsible to connect people and assure quality on the final result.',
      'This time get help from 3 other colaborators. A UI designer, a copywriter and another developer. The Designer and the copywriter assure that we have a mockup detailed enogh to match pixel perfect and acurate enough to match your client needs.',
      'I was without much time myself at this time and they should not wait to seel, so I ask to include another developer and they let me.',
      'This another devoloper had less experience, he end up building most of this page. My job with him was ensure that it was perfectly matching the mockup, responsive and working.',
      'I helped him to solve some usual CSS issues, specialy when handling responsivity. Also fixed some mistakes on my own and make this form work with firebase.',
    ],
    previewImage: FoodZillaLandingPagePreviewImage,
    $backgroundColor: '#2a373c',
    $textColor: '#fff',
    $reverse: false,
  },
  {
    id: '3',
    title: 'Foodzilla Landing Page',
    descriptionBlocks: [
      'Latter Foodzilla requested a landing page to attract new partners. I ended up being responsible to connect people and assure quality on the final result.',
      'This time get help from 3 other colaborators. A UI designer, a copywriter and another developer. The Designer and the copywriter assure that we have a mockup detailed enogh to match pixel perfect and acurate enough to match your client needs.',
      'I was without much time myself at this time and they should not wait to seel, so I ask to include another developer and they let me.',
      'This another devoloper had less experience, he end up building most of this page. My job with him was ensure that it was perfectly matching the mockup, responsive and working.',
      'I helped him to solve some usual CSS issues, specialy when handling responsivity. Also fixed some mistakes on my own and make this form work with firebase.',
    ],
    previewImage: FoodZillaLandingPagePreviewImage,
    $backgroundColor: '#6a8caf',
    $textColor: '#fff',
    $reverse: true,
  },
]

export default projectsList
