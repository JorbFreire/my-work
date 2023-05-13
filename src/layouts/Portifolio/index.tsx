import HeadLine from './sections/HeadLine'
import ProjectResume from './sections/ProjectResume'
import Footer from './sections/Footer'

import projectsList from './projectsList'

export default function Portifolio() {
  return (
    <>
      <HeadLine />
      {projectsList.map((projectInfo) => (
        <ProjectResume
          key={projectInfo.id}
          title={projectInfo.title}
          descriptionBlocks={projectInfo.descriptionBlocks}
          previewImage={projectInfo.previewImage}
          backgroundColor={projectInfo.backgroundColor}
          reverse={projectInfo.reverse}
        />
      ))}
      <Footer />
    </>
  )
}
