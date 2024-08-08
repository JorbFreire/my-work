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
          id={projectInfo.id === 1 ? 'first_project' : `${projectInfo.id}`}
          key={projectInfo.id}
          title={projectInfo.title}
          descriptionBlocks={projectInfo.descriptionBlocks}
          previewImage={projectInfo.previewImage}
          backgroundColor={projectInfo.backgroundColor}
          textColor={projectInfo.textColor}
          reverse={projectInfo.reverse}
        />
      ))}
      <Footer />
    </>
  )
}
