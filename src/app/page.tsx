import Image from 'next/image'
import Top from './top'
import Work from './work'
import Projects from './projects'
import Header from './header'
import Bio from './bio'
import Skills from './skills'
import Contact from './contact'

function BlurredDots(){
  return(
    <div className="blurred-dots-background">
      <Image src="/images/blurred-dots.svg" alt="blurred-dots" width={750} height={750} />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <BlurredDots />
      <main className="py-8 lg:py-12 hello-world">
        <Header />
        <Top />
        <Work />
        <Projects />
        <Bio />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
