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
          id={projectInfo.id === '1' ? 'first' : `${projectInfo.id}`}
          key={Number(projectInfo.id)}
          title={projectInfo.title}
          descriptionBlocks={projectInfo.descriptionBlocks}
          slideImages={projectInfo.slideImages}
          $backgroundColor={projectInfo.$backgroundColor}
          $textColor={projectInfo.$textColor}
          $slideSelectorColor={projectInfo.$slideSelectorColor}
          $reverse={projectInfo.$reverse}
        />
      ))}
      <Footer />
    </>
  )
}
