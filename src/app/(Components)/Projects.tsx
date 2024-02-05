import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import WorkElement from './ShowcaseElement'
import ProjectElement from './ProjectElement'


export default function Projects() {
  return (
    <div className="px-8 lg:px-12">
      <h2 className="">Personal projects</h2>
      <div className="flex flex-col xl:flex-row">
        <ProjectElement img="/images/simpictures.svg" href="https://linktr.ee/simpictures" linkText="Follow" title="SimPictures" text="SimPictures provides a platform for you to showcase your virtual flights and experiences, while also offering inspiration and ideas for your future airborne adventures. Think of it as the Instagram for virtual aviation enthusiasts, where you can effortlessly share captivating photos, discover breathtaking flights, and establish yourself as a prominent third-party scenery, plane, or addon developer in the flight sim community." />
        <ProjectElement img="/images/pitchtransition.svg" href="https://ffm.bio/ptchtrns" linkText="Enjoy" title="pitch transition" text="Handmade epic electronic music, crafted electronic vibes of transition pitches." />
      </div>
    </div>
  )
}