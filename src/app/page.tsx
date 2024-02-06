import Image from 'next/image'
import Top from './(Components)/Top'
import Showcases from './(Components)/Showcases'
import Projects from './(Components)/Projects'
import Header from './(Components)/Header'
import Bio from './(Components)/Bio'
import Skills from './(Components)/Skills'
import Contact from './(Components)/Contact'
import Footer from './(Components)/Footer'

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
        <Showcases />
        <Projects />
        <Bio />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
