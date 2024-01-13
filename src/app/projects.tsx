import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import WorkElement from './workElement'

function BlurredDots(){
  return(
    <div className="">
      <Image src="/images/personal-projects-line.svg" alt="blurred-dots" width={100} height={100} />
    </div>
  )
}

export default function Projects() {
  return (
    <div className="px-8 lg:px-12">
      <h2 className="">Personal projects</h2>
      <BlurredDots />
    </div>
  )
}