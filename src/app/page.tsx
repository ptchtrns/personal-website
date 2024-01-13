import Image from 'next/image'
import Top from './top'
import Work from './work'
import Projects from './projects'
import Header from './header'

function BlurredDots(){
  return(
    <div className="blurred-dots-background">
      <Image src="/images/blurred-dots.svg" alt="blurred-dots" width={850} height={850} />
    </div>
  )
}

export default function Home() {
  return (
    <main className="py-8 lg:py-12 hello-world">
      <BlurredDots />
      <Header />
      <Top />
      <Work />
      <Projects />
    </main>
  )
}
